module.exports = function (app) {

  var userModel = require('../models/user/user.model.server');

  var bcrypt = require("bcrypt-nodejs");
  var passport  = require('passport');

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  var FacebookStrategy = require('passport-facebook').Strategy;

  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };

  passport.use(
    new FacebookStrategy(facebookConfig, facebookStrategy));

  function facebookStrategy(token, refreshToken, profile, done)
  {
    userModel.findUserByFacebookId(profile.id)
      .then(function(user) {
        if(user) { return done(null, user); } // already in db
        else { // if not, insert into db using profile info
          var names = profile.displayName.split(" ");
          var newFacebookUser = { lastName:  names[1],
            firstName: names[0],
            email:     profile.emails ? profile.emails[0].value:"",
            facebook: { id: profile.id, token: token }
          };
          return userModel.createUser(newFacebookUser);
        }
      })
      .then(
        function(user){
          return done(null, user);
        });

  }

  app.get ('/facebook/login',
    passport.authenticate('facebook', { scope : 'email' }));

  app.get ('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));
  function localStrategy(usrn, pass, done) {
    userModel
      .findUserByUsername(usrn)
      .then(
        function(user) {
          if(user && user.username === usrn && bcrypt.compareSync(pass, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      );
  }

  app.post('/api/user', createUser);
  app.get('/api/user', findUsers);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);

  app.post('/api/register', register);
  app.post('/api/login',
    passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);

  app.get('/api/admin/user', findAllUsers);
  app.get('/api/admin/isAdmin', isAdmin);
  app.get('/api/admin/user', checkIsAdmin, findAllUsers);

  var users = [
    {_id: '123', username: 'alice', password: 'alice', mail: 'alice@gmail.com', firstName: 'Alicia', lastName: 'Wonderlandia'}
  ];

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    userModel.createUser(user)
      .then(function (user) {
        if(user) {
          req.login(user, function (err) {
            if(err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      });
  }

  function login(req, res) {
    res.json(req.user);
  }

  function isAdmin(req, res) {
    if(req.isAuthenticated() && req.user.roles.indexOf('ADMIN') > -1) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function checkIsAdmin(req, res, next) {
    if(req.isAuthenticated() && req.user.roles.indexOf('ADMIN') > -1) {
      next();
    } else {
      res.send(401);
    }
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }


  function createUser(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function (user) {
        res.json(user);
      });
  }

  function findAllUsers(req, res) {
    userModel
      .findAllUsers()
      .then(function (users) {
        res.json(users);
      });
  }

  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
      });
      return;
    } else if (username) {
      userModel.findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        });
      return;
    }

    res.json(users);
  }

  function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel
      .findUserById(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var newUser = req.body;
    userModel.updateUser(userId, newUser)
      .then(function (users) {
        res.json(users);
      });
  }

};
