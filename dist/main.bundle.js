webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_foodlog_service_client__ = __webpack_require__("../../../../../src/app/services/foodlog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_fooditem_service_client__ = __webpack_require__("../../../../../src/app/services/fooditem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_nutrionixAPI_service_client__ = __webpack_require__("../../../../../src/app/services/nutrionixAPI.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_shares_service_client__ = __webpack_require__("../../../../../src/app/services/shares.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_foodlog_foodlog_list_foodlog_list_component__ = __webpack_require__("../../../../../src/app/components/foodlog/foodlog-list/foodlog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_foodlog_foodlog_edit_foodlog_edit_component__ = __webpack_require__("../../../../../src/app/components/foodlog/foodlog-edit/foodlog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_foodlog_foodlog_new_foodlog_new_component__ = __webpack_require__("../../../../../src/app/components/foodlog/foodlog-new/foodlog-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_fooditem_fooditem_list_fooditem_list_component__ = __webpack_require__("../../../../../src/app/components/fooditem/fooditem-list/fooditem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_fooditem_fooditem_new_fooditem_new_component__ = __webpack_require__("../../../../../src/app/components/fooditem/fooditem-new/fooditem-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_fooditem_fooditem_edit_fooditem_edit_component__ = __webpack_require__("../../../../../src/app/components/fooditem/fooditem-edit/fooditem-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_user_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_admin_service_client__ = __webpack_require__("../../../../../src/app/services/admin.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_user_admin_create_user_admin_create_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-create-user/admin-create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_user_admin_edit_user_admin_edit_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-edit-user/admin-edit-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_foodlog_foodlog_list_foodlog_list_component__["a" /* FoodlogListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_foodlog_foodlog_edit_foodlog_edit_component__["a" /* FoodlogEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_foodlog_foodlog_new_foodlog_new_component__["a" /* FoodlogNewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_fooditem_fooditem_list_fooditem_list_component__["a" /* FooditemListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_fooditem_fooditem_new_fooditem_new_component__["a" /* FooditemNewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_fooditem_fooditem_edit_fooditem_edit_component__["a" /* FooditemEditComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_user_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_user_admin_create_user_admin_create_user_component__["a" /* AdminCreateUserComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_user_admin_edit_user_admin_edit_user_component__["a" /* AdminEditUserComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__services_foodlog_service_client__["a" /* FoodlogService */],
            __WEBPACK_IMPORTED_MODULE_14__services_fooditem_service_client__["a" /* FooditemService */],
            __WEBPACK_IMPORTED_MODULE_15__services_nutrionixAPI_service_client__["a" /* NutrionixAPIService */],
            __WEBPACK_IMPORTED_MODULE_16__services_shares_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_23__services_authentication_service_client__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_25__services_admin_service_client__["a" /* AdminServiceClient */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_foodlog_foodlog_list_foodlog_list_component__ = __webpack_require__("../../../../../src/app/components/foodlog/foodlog-list/foodlog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_foodlog_foodlog_edit_foodlog_edit_component__ = __webpack_require__("../../../../../src/app/components/foodlog/foodlog-edit/foodlog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_foodlog_foodlog_new_foodlog_new_component__ = __webpack_require__("../../../../../src/app/components/foodlog/foodlog-new/foodlog-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_fooditem_fooditem_list_fooditem_list_component__ = __webpack_require__("../../../../../src/app/components/fooditem/fooditem-list/fooditem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fooditem_fooditem_new_fooditem_new_component__ = __webpack_require__("../../../../../src/app/components/fooditem/fooditem-new/fooditem-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_admin_create_user_admin_create_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-create-user/admin-create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_admin_edit_user_admin_edit_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-edit-user/admin-edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_admin_service_client__ = __webpack_require__("../../../../../src/app/services/admin.service.client.ts");
















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'admin/user', component: __WEBPACK_IMPORTED_MODULE_11__components_user_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_admin_service_client__["a" /* AdminServiceClient */]] },
    { path: 'admin/user/new', component: __WEBPACK_IMPORTED_MODULE_12__components_user_admin_create_user_admin_create_user_component__["a" /* AdminCreateUserComponent */], pathMatch: 'full' },
    { path: 'admin/user/:userId', component: __WEBPACK_IMPORTED_MODULE_13__components_user_admin_edit_user_admin_edit_user_component__["a" /* AdminEditUserComponent */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/:userId/foodlog', component: __WEBPACK_IMPORTED_MODULE_6__components_foodlog_foodlog_list_foodlog_list_component__["a" /* FoodlogListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]], pathMatch: 'full' },
    { path: 'profile/:userId/foodlog/new', component: __WEBPACK_IMPORTED_MODULE_8__components_foodlog_foodlog_new_foodlog_new_component__["a" /* FoodlogNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]], pathMatch: 'full' },
    { path: 'profile/:userId/foodlog/:logId', component: __WEBPACK_IMPORTED_MODULE_7__components_foodlog_foodlog_edit_foodlog_edit_component__["a" /* FoodlogEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]], pathMatch: 'full' },
    { path: 'profile/:userId/foodlog/:logId/item', component: __WEBPACK_IMPORTED_MODULE_9__components_fooditem_fooditem_list_fooditem_list_component__["a" /* FooditemListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]], pathMatch: 'full' },
    { path: 'profile/:userId/foodlog/:logId/item/:time', component: __WEBPACK_IMPORTED_MODULE_10__components_fooditem_fooditem_new_fooditem_new_component__["a" /* FooditemNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]], pathMatch: 'full' }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-edit/fooditem-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-edit/fooditem-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fooditem-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-edit/fooditem-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooditemEditComponent = (function () {
    function FooditemEditComponent() {
    }
    FooditemEditComponent.prototype.ngOnInit = function () {
    };
    return FooditemEditComponent;
}());
FooditemEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fooditem-edit',
        template: __webpack_require__("../../../../../src/app/components/fooditem/fooditem-edit/fooditem-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fooditem/fooditem-edit/fooditem-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooditemEditComponent);

//# sourceMappingURL=fooditem-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-list/fooditem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-list/fooditem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-header pull-left\">\n      <a routerLink=\"/profile/{{userId}}/foodlog\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a href=\"\"\n         class=\"navbar-brand thick\">\n        <b>Log Down</b>\n      </a>\n    </p>\n\n    <!--logout-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"logOut()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n      </a>\n    </p>\n    <!--Logged In User Name-->\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thick\">\n        <b>{{user.username}}</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div>\n    <h2 align=\"center\">{{foodlog.name}}</h2>\n\n    <div align=\"\">\n      <h3>Breakfast\n        <a routerLink=\"/profile/{{userId}}/foodlog/{{logId}}/item/breakfast\">\n                <span class=\"glyphicon\n                glyphicon-plus-sign\n                pull-right\"></span>\n        </a>\n      </h3>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item list-custom\"\n            *ngFor=\"let food of breakfast\">\n          <p> <b>{{food.name}}</b>\n            <span class=\"glyphicon glyphicon-fire\">\n            </span>\n            Calories : {{food.calories}}</p>\n          <a (click)=\"deleteItem(food._id)\">\n            <span class=\"glyphicon glyphicon-remove-sign pull-right\">\n            </span>\n          </a>\n          <br>\n          <p>Serving Size: {{food.servingsize}} </p>\n        </li>\n      </ul>\n    </div>\n\n\n    <div align=\"\">\n      <h3>Lunch\n        <a routerLink=\"/profile/{{userId}}/foodlog/{{logId}}/item/lunch\">\n                <span class=\"glyphicon\n                glyphicon-plus-sign\n                pull-right\"></span>\n        </a>\n      </h3>\n\n      <li class=\"list-group-item list-custom\"\n          *ngFor=\"let food of lunch\">\n        <p> <b>{{food.name}}</b>\n          <span class=\"glyphicon glyphicon-fire\">\n            </span>\n          Calories : {{food.calories}}</p>\n        <a (click)=\"deleteItem(food._id)\">\n            <span class=\"glyphicon glyphicon-remove-sign pull-right\">\n            </span>\n        </a>\n        <br>\n        <p>Serving Size: {{food.servingsize}} </p>\n      </li>\n    </div>\n\n    <div align=\"\">\n      <h3>Dinner\n        <a routerLink=\"/profile/{{userId}}/foodlog/{{logId}}/item/dinner\">\n                <span class=\"glyphicon\n                glyphicon-plus-sign\n                pull-right\"></span>\n        </a>\n      </h3>\n\n      <ul class=\"list-group\">\n\n        <li class=\"list-group-item list-custom\"\n            *ngFor=\"let food of dinner\">\n          <p> <b>{{food.name}}</b>\n            <span class=\"glyphicon glyphicon-fire\">\n            </span>\n            Calories : {{food.calories}}</p>\n          <a (click)=\"deleteItem(food._id)\">\n            <span class=\"glyphicon glyphicon-remove-sign pull-right\">\n            </span>\n          </a>\n          <br>\n          <p>Serving Size: {{food.servingsize}} </p>\n        </li>\n      </ul>\n    </div>\n\n    <div align=\"\">\n      <h3>Snacks\n        <a routerLink=\"/profile/{{userId}}/foodlog/{{logId}}/item/snacks\">\n                <span class=\"glyphicon\n                glyphicon-plus-sign\n                pull-right\"></span>\n        </a>\n      </h3>\n\n      <ul class=\"list-group\">\n\n        <li class=\"list-group-item list-custom\"\n            *ngFor=\"let food of snacks\">\n          <p> <b>{{food.name}}</b>\n            <span class=\"glyphicon glyphicon-fire\">\n            </span>\n            Calories : {{food.calories}}</p>\n          <a (click)=\"deleteItem(food._id)\">\n            <span class=\"glyphicon glyphicon-remove-sign pull-right\">\n            </span>\n          </a>\n          <br>\n          <p>Serving Size: {{food.servingsize}} </p>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-list/fooditem-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fooditem_service_client__ = __webpack_require__("../../../../../src/app/services/fooditem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_foodlog_service_client__ = __webpack_require__("../../../../../src/app/services/foodlog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FooditemListComponent = (function () {
    function FooditemListComponent(fooditemService, activatedRoute, foodlogService, router, userService) {
        this.fooditemService = fooditemService;
        this.activatedRoute = activatedRoute;
        this.foodlogService = foodlogService;
        this.router = router;
        this.userService = userService;
    }
    FooditemListComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    FooditemListComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        this.fooditemService.deleteItem(this.userId, this.logId, itemId)
            .subscribe(function (fooditems) {
            _this.fooditems = fooditems;
            _this.router.navigate(['profile', _this.userId, 'foodlog']);
            // this.router.navigate(['profile', this.userId, 'foodlog', this.logId, 'item'])
        });
    };
    FooditemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bk = 'breakfast';
        var lc = 'lunch';
        var dn = 'dinner';
        var sk = 'snacks';
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.logId = params['logId'];
            _this.fooditemService
                .findItemByLogId(_this.userId, _this.logId)
                .subscribe(function (fooditems) {
                _this.fooditems = fooditems;
            });
            _this.fooditemService
                .findItemByLogIdEvent(_this.userId, _this.logId, bk)
                .subscribe(function (breakfasts) {
                _this.breakfast = breakfasts;
            });
            _this.fooditemService
                .findItemByLogIdEvent(_this.userId, _this.logId, lc)
                .subscribe(function (lunches) {
                _this.lunch = lunches;
            });
            _this.fooditemService
                .findItemByLogIdEvent(_this.userId, _this.logId, dn)
                .subscribe(function (dinners) {
                _this.dinner = dinners;
            });
            _this.fooditemService
                .findItemByLogIdEvent(_this.userId, _this.logId, sk)
                .subscribe(function (snackss) {
                _this.snacks = snackss;
            });
            _this.foodlogService
                .findFoodLogById(_this.userId, _this.logId)
                .subscribe(function (foodlog) {
                _this.foodlog = foodlog;
            });
            _this.userService
                .findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    return FooditemListComponent;
}());
FooditemListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fooditem-list',
        template: __webpack_require__("../../../../../src/app/components/fooditem/fooditem-list/fooditem-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fooditem/fooditem-list/fooditem-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fooditem_service_client__["a" /* FooditemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fooditem_service_client__["a" /* FooditemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_foodlog_service_client__["a" /* FoodlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_foodlog_service_client__["a" /* FoodlogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _e || Object])
], FooditemListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=fooditem-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-new/fooditem-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-new/fooditem-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-header pull-left\">\n      <a routerLink=\"/profile/{{userId}}/foodlog\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a href=\"\"\n         class=\"navbar-brand thick\">\n        <b>LogDown</b>\n      </a>\n    </p>\n\n    <!--logout-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"logOut()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n      </a>\n    </p>\n    <!--Logged In User Name-->\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thick\">\n        <b>{{user.username}}</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div align=\"center\">\n    <h3>Search Nutrionix API for Caloric Content of Food Item</h3>\n    <input [(ngModel)]=\"fooditem\"\n           placeholder=\"pizza\"\n           class=\"form-control form-custom\"/>\n\n    <a (click)=\"searchFood(fooditem)\"\n            class=\"btn btn-primary btn-block btn-custom\">\n      Search\n    </a>\n\n    <div *ngIf=\"errorFlag2\"\n         class=\"alert alert-danger\">\n      <b>\"Enter a food item to view details\"</b>\n    </div>\n\n    <ul class=\"list-group\">\n      <div *ngIf=\"errorFlag\"\n           class=\"alert\">\n        <b>\n          <h3>Additional Information</h3><br>\n          <b>Brand Name: {{brand_name}}</b><br>\n          <b>Product Name: {{add_name}}</b><br>\n          <b>Sugar Content: {{sugar}}</b><br>\n          <b>Dietary Fibers: {{fiber}}</b><br>\n          <b>Protein Content: {{protein}}</b><br>\n          <b>Sodium Content: {{sodium}}</b><br>\n          <b>Fat Content: {{fat}}</b><br>\n        </b>\n      </div>\n      <li class=\"list-group-item list-custom\"\n          *ngFor=\"let food of result\">\n        <h4>\n          <a (click)=\"displayContent(food)\">\n            {{food.fields.item_name}}\n          </a>\n\n          <a (click)=\"fetchFood(food)\">\n          <span class=\"glyphicon\n          glyphicon-plus-sign pull-right\"></span>\n          </a>\n        </h4>\n        Calories : {{food.fields.nf_calories}} <br>\n        Serving Size: {{food.fields.nf_serving_size_qty}}\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/fooditem/fooditem-new/fooditem-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nutrionixAPI_service_client__ = __webpack_require__("../../../../../src/app/services/nutrionixAPI.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_fooditem_service_client__ = __webpack_require__("../../../../../src/app/services/fooditem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooditemNewComponent = (function () {
    function FooditemNewComponent(nutrionixService, activatedRoute, fooditemService, router, userService) {
        this.nutrionixService = nutrionixService;
        this.activatedRoute = activatedRoute;
        this.fooditemService = fooditemService;
        this.router = router;
        this.userService = userService;
    }
    FooditemNewComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    FooditemNewComponent.prototype.searchFood = function (fooditem) {
        var _this = this;
        if (fooditem) {
            this.nutrionixService.searchFoodByName(fooditem)
                .subscribe(function (result) {
                _this.result = result.hits;
            });
        }
        else {
            this.errorFlag2 = true;
        }
    };
    FooditemNewComponent.prototype.displayContent = function (food) {
        this.add_name = food.fields.item_name;
        this.add_calories = food.fields.nf_calories;
        this.add_servingsize = food.fields.nf_serving_size_qty;
        this.brand_name = food.fields.brand_name;
        this.servingunit = food.fields.nf_serving_size_unit;
        this.fat = food.fields.nf_total_fat;
        this.sugar = food.fields.nf_sugars;
        this.fiber = food.fields.nf_dietary_fiber;
        this.protein = food.fields.nf_protein;
        this.sodium = food.fields.nf_sodium;
        this.errorFlag = true;
    };
    FooditemNewComponent.prototype.fetchFood = function (food) {
        var _this = this;
        this.name = food.fields.item_name;
        this.calories = food.fields.nf_calories;
        this.servingsize = food.fields.nf_serving_size_qty;
        if (this.event === 'breakfast') {
            var new_item = {
                name: this.name,
                logId: this.logId,
                calories: this.calories,
                servingsize: this.servingsize,
                event: "breakfast"
            };
            this.fooditemService.createFooditem(this.userId, this.logId, new_item)
                .subscribe(function (itemFromServer) {
                _this.router.navigate(['profile', _this.userId, 'foodlog', _this.logId, 'item']);
            });
        }
        else if (this.event === 'lunch') {
            var new_item = {
                name: this.name,
                logId: this.logId,
                calories: this.calories,
                servingsize: this.servingsize,
                event: "lunch"
            };
            this.fooditemService.createFooditem(this.userId, this.logId, new_item)
                .subscribe(function (itemFromServer) {
                _this.router.navigate(['profile', _this.userId, 'foodlog', _this.logId, 'item']);
            });
        }
        else if (this.event === 'dinner') {
            var new_item = {
                name: this.name,
                logId: this.logId,
                calories: this.calories,
                servingsize: this.servingsize,
                event: "dinner"
            };
            this.fooditemService.createFooditem(this.userId, this.logId, new_item)
                .subscribe(function (itemFromServer) {
                _this.router.navigate(['profile', _this.userId, 'foodlog', _this.logId, 'item']);
            });
        }
        else if (this.event === 'snacks') {
            var new_item = {
                name: this.name,
                logId: this.logId,
                calories: this.calories,
                servingsize: this.servingsize,
                event: "snacks"
            };
            this.fooditemService.createFooditem(this.userId, this.logId, new_item)
                .subscribe(function (itemFromServer) {
                _this.router.navigate(['profile', _this.userId, 'foodlog', _this.logId, 'item']);
            });
        }
    };
    FooditemNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.logId = params['logId'];
            _this.event = params['time'];
            _this.userService
                .findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    return FooditemNewComponent;
}());
FooditemNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fooditem-new',
        template: __webpack_require__("../../../../../src/app/components/fooditem/fooditem-new/fooditem-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fooditem/fooditem-new/fooditem-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_nutrionixAPI_service_client__["a" /* NutrionixAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nutrionixAPI_service_client__["a" /* NutrionixAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_fooditem_service_client__["a" /* FooditemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_fooditem_service_client__["a" /* FooditemService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _e || Object])
], FooditemNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=fooditem-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-edit/foodlog-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-edit/foodlog-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--adding the back glyphicon-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/foodlog\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit</b>\n      </a>\n    </p>\n    <!--logout-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"logOut()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n      </a>\n    </p>\n    <!--Logged In User Name-->\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thick\">\n        <b>{{user.username}}</b>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateFoodlog(logId)\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\">\n        </span>\n      </a>\n    </p>\n\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      <b>\"Enter a Name to Edit the Log!!\"</b>\n    </div>\n  <label>Log Name</label>\n  <input [(ngModel)]=\"foodlog.name\"\n         class=\"form-control\"\n         value=\"{{foodlog.name}}\"/>\n\n  <label>Date</label>\n  <input [(ngModel)]=\"foodlog.dateCreated\"\n         class=\"form-control\"\n         type=\"date\"\n         value=\"{{foodlog.dateCreated}}\"/>\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteFoodlog()\">\n    Delete\n  </a>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-edit/foodlog-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodlogEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__ = __webpack_require__("../../../../../src/app/services/foodlog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodlogEditComponent = (function () {
    function FoodlogEditComponent(foodlogService, activatedRoute, router, userService) {
        this.foodlogService = foodlogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
    }
    FoodlogEditComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    FoodlogEditComponent.prototype.updateFoodlog = function (logId) {
        var _this = this;
        this.foodlogService.findFoodLogById(this.userId, logId)
            .subscribe(function (foodlog) {
            _this.foodlog = foodlog;
        });
        if (this.foodlog.name) {
            var updatedFoodlog = this.foodlog;
            this.foodlogService.updateFoodlog(this.userId, updatedFoodlog)
                .subscribe(function (foodlogs) {
                _this.foodlogs = foodlogs;
                _this.router.navigate(['profile', _this.userId, 'foodlog']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    FoodlogEditComponent.prototype.deleteFoodlog = function () {
        var _this = this;
        if (this.logId) {
            this.foodlogService
                .deleteFoodlog(this.userId, this.logId)
                .subscribe(function (foodlog) {
                _this.router.navigate(['/profile/', _this.userId, 'foodlog']);
            });
        }
    };
    FoodlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.logId = params['logId'];
            // this.foodlogService
            //   .findFoodlogsByUser(this.userId)
            //   .subscribe((foodlogs) => {
            //     this.foodlogs = foodlogs;
            //   });
            _this.foodlogService
                .findFoodLogById(_this.userId, _this.logId)
                .subscribe(function (foodlog) {
                _this.foodlog = foodlog;
            });
            _this.userService
                .findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    return FoodlogEditComponent;
}());
FoodlogEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-foodlog-edit',
        template: __webpack_require__("../../../../../src/app/components/foodlog/foodlog-edit/foodlog-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/foodlog/foodlog-edit/foodlog-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__["a" /* FoodlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__["a" /* FoodlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], FoodlogEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=foodlog-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-list/foodlog-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-list/foodlog-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>FoodLogs</b>\n      </a>\n    </p>\n\n    <!--add mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}/foodlog/new\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n    <!--logout-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"logOut()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n      </a>\n    </p>\n\n    <!--Logged In User Name-->\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thick\">\n        <b>{{user.username}}</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6\">\n          Foodlog Name\n        </div>\n        <div class=\"col-md-3 hidden-xs\">\n          Date\n        </div>\n      </div>\n    </li>\n\n    <div>\n      <li class=\"list-group-item\" *ngFor=\"let foodlog of foodlogs\">\n        <div class=\"row\">\n          <div class=\"col-xs-9 col-sm-6\">\n            <a routerLink=\"/profile/{{userId}}/foodlog/{{foodlog._id}}/item\">\n              {{foodlog.name}}\n            </a>\n          </div>\n          <div class=\"col-md-3 hidden-xs\">\n            <a routerLink=\"\">\n              {{foodlog.dateCreated}}\n            </a>\n          </div>\n          <div class=\"col-xs-3\">\n            <a class=\"pull-right\"\n               routerLink=\"/profile/{{userId}}/foodlog/{{foodlog._id}}\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n          </div>\n\n\n        </div>\n\n      </li>\n    </div>\n\n  </ul>\n\n  <button href=\"admin/user\" [hidden]=\"user.roles !== 'ADMIN'\">\n    Users\n  </button>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-list/foodlog-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodlogListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__ = __webpack_require__("../../../../../src/app/services/foodlog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodlogListComponent = (function () {
    function FoodlogListComponent(foodlogService, activatedRoute, userService, router) {
        this.foodlogService = foodlogService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }
    FoodlogListComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    FoodlogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.foodlogService
                .findFoodlogsByUser(_this.userId)
                .subscribe(function (foodlogs) {
                _this.foodlogs = foodlogs;
            });
            _this.userService
                .findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    return FoodlogListComponent;
}());
FoodlogListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-foodlog-list',
        template: __webpack_require__("../../../../../src/app/components/foodlog/foodlog-list/foodlog-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/foodlog/foodlog-list/foodlog-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__["a" /* FoodlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__["a" /* FoodlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], FoodlogListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=foodlog-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-new/foodlog-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-new/foodlog-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--adding the back glyphicon-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/foodlog\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>New Foodlog</b>\n      </a>\n    </p>\n    <!--logout-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"logOut()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n      </a>\n    </p>\n    <!--Logged In User Name-->\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thick\">\n        <b>{{user.username}}</b>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"foodlognew()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\">\n        </span>\n      </a>\n    </p>\n\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    <b>Please enter a name for the foodlog!!</b>\n  </div>\n  <div class=\"form-group\">\n    <label>Log Name</label>\n    <input [(ngModel)]='name'\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"entry on wednesday\">\n  </div>\n  <div class=\"form-group\">\n    <label>Date</label>\n    <input [(ngModel)]='date'\n           type=\"date\"\n           class=\"form-control\">\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/foodlog/foodlog-new/foodlog-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodlogNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__ = __webpack_require__("../../../../../src/app/services/foodlog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_foodlog_model_client__ = __webpack_require__("../../../../../src/app/models/foodlog.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodlogNewComponent = (function () {
    function FoodlogNewComponent(foodlogService, activatedRoute, router, userService) {
        this.foodlogService = foodlogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
    }
    FoodlogNewComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    FoodlogNewComponent.prototype.foodlognew = function () {
        var _this = this;
        if (this.name) {
            var foodlog = new __WEBPACK_IMPORTED_MODULE_2__models_foodlog_model_client__["a" /* FoodLog */]('', this.name, this.userId, this.date);
            this.foodlogService.createFoodlog(this.userId, foodlog)
                .subscribe(function (foodlogs) {
                _this.router.navigate(['profile', _this.userId, 'foodlog']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    FoodlogNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.foodlogService
                .findFoodlogsByUser(_this.userId)
                .subscribe(function (foodlogs) {
                _this.foodlogs = foodlogs;
            });
            _this.userService
                .findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    return FoodlogNewComponent;
}());
FoodlogNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-foodlog-new',
        template: __webpack_require__("../../../../../src/app/components/foodlog/foodlog-new/foodlog-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/foodlog/foodlog-new/foodlog-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__["a" /* FoodlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_foodlog_service_client__["a" /* FoodlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], FoodlogNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=foodlog-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a href=\"\"\n         class=\"navbar-brand thick\">\n        <b>LogDown</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-right\">\n      <a routerLink=\"/login\"\n         class=\"navbar-brand thick\">\n        <b>Login</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-right\">\n      <a routerLink=\"/register\"\n         class=\"navbar-brand thick\">\n        <b>Register</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div align=\"center\">\n  <div *ngIf=\"msgFlag\"\n       class=\"alert alert-danger\">\n    <b>Login or Register to Log Down your Food</b>\n  </div>\n  <h1>LogDown</h1>\n  <h3>to a healthier life</h3>\n\n  <h2>Search calories in you food</h2>\n  <input [(ngModel)]=\"fooditem\"\n         placeholder=\"pizza\"\n         class=\"form-control form-custom\"/>\n  <button (click)=\"searchFood(fooditem)\"\n          class=\"btn btn-primary btn-custom\">\n    Search\n  </button>\n\n  <ul class=\"list-custom list-group\">\n    <li class=\"list-group-item\"\n        *ngFor=\"let food of result\">\n      <h4>{{food.fields.item_name}}\n        <a>\n          <span class=\"glyphicon\n          glyphicon-plus-sign pull-right\"\n                (click)=\"displayMessage()\"></span>\n        </a>\n      </h4>\n      Calories: {{food.fields.nf_calories}} <br>\n      Serving Size: {{food.fields.nf_serving_size_qty}}\n\n    </li>\n  </ul>\n\n  <!--<a href=\"../../../../assets/views/gymsearch.html\"-->\n     <!--class=\"btn btn-success btn-custom\">-->\n    <!--Search nearby gyms-->\n  <!--</a>-->\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\"></div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nutrionixAPI_service_client__ = __webpack_require__("../../../../../src/app/services/nutrionixAPI.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(nutrionixService) {
        this.nutrionixService = nutrionixService;
    }
    HomeComponent.prototype.searchFood = function (fooditem) {
        var _this = this;
        this.nutrionixService.searchFoodByName(this.fooditem)
            .subscribe(function (result) {
            _this.result = result.hits;
            console.log(_this.result);
        });
    };
    HomeComponent.prototype.displayMessage = function () {
        this.msgFlag = true;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nutrionixAPI_service_client__["a" /* NutrionixAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nutrionixAPI_service_client__["a" /* NutrionixAPIService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin-create-user/admin-create-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin-create-user/admin-create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--adding the back glyphicon-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/foodlog\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>New User</b>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"newUser()\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\">\n        </span>\n      </a>\n    </p>\n\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"form-group\">\n    <label>User Name</label>\n    <input [(ngModel)]='name'\n           type=\"text\"\n           class=\"form-control form-custom\"\n           placeholder=\"Alice\">\n  </div>\n  <div class=\"form-group form-custom\">\n    <label>Password</label>\n    <input [(ngModel)]='password'\n           type=\"text\"\n           class=\"form-control\">\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin-create-user/admin-create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminCreateUserComponent = (function () {
    function AdminCreateUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    // foodlognew() {
    //   if (this.name) {
    //     const foodlog: FoodLog = new FoodLog('', this.name, this.userId, this.date);
    //     this.foodlogService.createFoodlog(this.userId, foodlog)
    //       .subscribe((foodlogs) => {
    //         this.router.navigate(['profile', this.userId, 'foodlog']);
    //       });
    //   } else {
    //     this.errorFlag = true;
    //   }
    //
    // }
    AdminCreateUserComponent.prototype.newUser = function () {
        var _this = this;
        var new_user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */]('', this.name, this.password, '', '', '');
        this.userService.createUser(new_user)
            .subscribe(function (users) {
            _this.router.navigate(['/admin', 'user']);
        });
    };
    AdminCreateUserComponent.prototype.ngOnInit = function () {
    };
    return AdminCreateUserComponent;
}());
AdminCreateUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-create-user',
        template: __webpack_require__("../../../../../src/app/components/user/admin-create-user/admin-create-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin-create-user/admin-create-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminCreateUserComponent);

var _a, _b;
//# sourceMappingURL=admin-create-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin-edit-user/admin-edit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin-edit-user/admin-edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-edit-user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin-edit-user/admin-edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminEditUserComponent = (function () {
    function AdminEditUserComponent() {
    }
    AdminEditUserComponent.prototype.ngOnInit = function () {
    };
    return AdminEditUserComponent;
}());
AdminEditUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-edit-user',
        template: __webpack_require__("../../../../../src/app/components/user/admin-edit-user/admin-edit-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin-edit-user/admin-edit-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminEditUserComponent);

//# sourceMappingURL=admin-edit-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user-list/admin-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user-list/admin-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>User List</b>\n      </a>\n    </p>\n\n    <!--add mark-->\n    <p class=\"navbar-text pull-right\">\n      <a class=\"navbar-link\"\n         routerLink=\"/admin/user/new\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <h1>User List</h1>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let user of users\"\n        class=\"list-group-item list-custom\">\n      <a routerLink=\"/admin/user/{{user._id}}\">\n        {{user.username}}\n      </a>\n    </li>\n  </ul>\n\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a >\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user-list/admin-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminUserListComponent = (function () {
    function AdminUserListComponent(userService) {
        this.userService = userService;
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .findAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    return AdminUserListComponent;
}());
AdminUserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-list',
        template: __webpack_require__("../../../../../src/app/components/user/admin-user-list/admin-user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin-user-list/admin-user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AdminUserListComponent);

var _a;
//# sourceMappingURL=admin-user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a routerLink=\"\"\n         class=\"navbar-brand thick\">\n        <b>LogDown</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thick\">\n        <b>Login</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-right\">\n      <a routerLink=\"/register\"\n         class=\"navbar-brand thick\">\n        <b>Register</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div align=\"center\">\n\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      'Please enter both username and password!!'\n    </div>\n\n    <h1>Login</h1>\n\n    <input [(ngModel)]=\"username\"\n           placeholder=\"alice\"\n           type=\"text\"\n           id=\"username\"\n           class=\"form-control form-custom\"/>\n\n    <input [(ngModel)]=\"password\"\n           placeholder=\"123!123\"\n           type=\"password\"\n           id=\"password\"\n           class=\"form-control form-custom\"/>\n\n    <a (click)=\"login()\"\n       class=\"btn btn-primary btn-block btn-custom\">\n      Login\n    </a>\n\n    <a href=\"{{base_url}}/facebook/login\"\n       class=\"btn btn-primary btn-block btn-custom\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook\n    </a>\n\n    <a routerLink=\"/register\"\n       class=\"btn btn-success btn-block btn-custom\">\n      Register\n    </a>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__ = __webpack_require__("../../../../../src/app/services/shares.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.base_url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.username && this.password) {
            this.userService
                .login(this.username, this.password)
                .subscribe(function (user) {
                _this.sharedService.user = user;
                // this.router.navigate(['/profile', user._id, 'foodlog']);
                _this.router.navigate(['/profile']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a class=\"navbar-link\"\n         (click)=\"update()\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             name=\"username\"\n             placeholder=\"alice\"\n             id=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"mail\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"mail\"\n             placeholder=\"alice.wonderland@unicorn.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             name=\"firstName\"\n             id=\"first-name\"\n             placeholder=\"Alice\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             name=\"lastName\"\n             placeholder=\"Wonderland\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block \"\n     (click)=\"update()\">Update</a>\n\n  <a class=\"btn btn-success btn-block\"\n     routerLink=\"/profile/{{user._id}}/foodlog\">\n    FoodLog List\n  </a>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    'The current user is not an admin!!'\n  </div>\n\n  <a routerLink=\"/admin/user\"\n     class=\"btn btn-danger btn-block \"\n     (click)=\"checkUser()\">\n    Users\n  </a>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"logout(user)\">Logout</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a >\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__ = __webpack_require__("../../../../../src/app/services/shares.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(activatedRoute, userService, sharedService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.update = function () {
        this.sharedService.user['firstName'] = this.firstName;
        this.sharedService.user['lastName'] = this.lastName;
        this.sharedService.user['username'] = this.username;
        this.sharedService.user['mail'] = this.mail;
        this.userService
            .updateUser(this.sharedService.user['_id'], this.sharedService.user)
            .subscribe(function (users) {
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.checkUser = function (user) {
        if (user.roles.indexOf('ADMIN') > -1) {
            this.router.navigate(['/admin', 'user']);
        }
        else {
            this.errorFlag = true;
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        this.username = this.user['username'];
        this.mail = this.user['mail'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.password = this.user['password'];
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a routerLink=\"\"\n         class=\"navbar-brand thick\">\n        <b>LogDown</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-right\">\n      <a routerLink=\"/login\"\n         class=\"navbar-brand thick\">\n        <b>Login</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thick\">\n        <b>Register</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div align=\"center\">\n\n    <div *ngIf=\"errorFlag1\"\n         class=\"alert alert-danger\">\n      The passwords do not match!!\n    </div>\n\n    <div *ngIf=\"errorFlag2\"\n         class=\"alert alert-danger\">\n      <b>Please enter username, password and verify the password!!</b>\n    </div>\n\n    <h1>Register</h1>\n    <input [(ngModel)]=\"username\"\n           placeholder=\"username\"\n           type=\"text\"\n           class=\"form-control form-custom\"/>\n\n    <input [(ngModel)]=\"password\"\n           placeholder=\"password\"\n           type=\"password\"\n           class=\"form-control form-custom\"/>\n    <input [(ngModel)]=\"verify_password\"\n           placeholder=\"verify password\"\n           type=\"password\"\n           class=\"form-control form-custom\"/>\n\n    <a (click)=\"register()\"\n       class=\"btn btn-success btn-block btn-custom\">\n      Register\n    </a>\n\n    <a class=\"btn btn-danger btn-block btn-custom\"\n       routerLink=\"\" >Cancel</a>\n  </div>\n\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__ = __webpack_require__("../../../../../src/app/services/shares.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.username && this.password && this.verify_password) {
            if (this.password !== this.verify_password) {
                this.errorFlag1 = true;
                return;
            }
            this.userService.register(this.username, this.password)
                .subscribe(function (user) {
                _this.sharedService.user = user;
                _this.router.navigate(['/profile']);
            });
        }
        else {
            this.errorFlag2 = true;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shares_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/foodlog.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodLog; });
var FoodLog = (function () {
    function FoodLog(_id, name, clientId, dateCreated) {
        this._id = _id;
        this.name = name;
        this.clientId = clientId;
        this.dateCreated = dateCreated;
    }
    return FoodLog;
}());

//# sourceMappingURL=foodlog.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, mail, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.mail = mail;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminServiceClient = (function () {
    function AdminServiceClient(userService) {
        this.userService = userService;
    }
    AdminServiceClient.prototype.canActivate = function () {
        return this.userService.isAdmin();
    };
    return AdminServiceClient;
}());
AdminServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AdminServiceClient);

var _a;
//# sourceMappingURL=admin.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/fooditem.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooditemService = (function () {
    function FooditemService(http) {
        this.http = http;
        this.domain_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createFooditem': this.createFooditem,
            'findItemByLogId': this.findItemByLogId,
            'findItemById': this.findItemById,
            'deleteItem': this.deleteItem,
            'findItemByLogIdEvent': this.findItemByLogIdEvent,
            'clientItem': this.clientItem,
            'findClientItem': this.findClientItem
        };
    }
    FooditemService.prototype.clientItem = function (item) {
        this.client_items.push(item);
        return item;
    };
    FooditemService.prototype.findClientItem = function () {
        return this.client_items[0];
    };
    FooditemService.prototype.createFooditem = function (userId, logId, fooditem) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item';
        return this.http.post(url, fooditem)
            .map(function (response) {
            return response.json();
        });
    };
    FooditemService.prototype.findItemByLogId = function (userId, logId) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    FooditemService.prototype.findItemByLogIdEvent = function (userId, logId, event) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item/' + event;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    FooditemService.prototype.findItemById = function (userId, logId, itemId) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item/' + itemId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    FooditemService.prototype.deleteItem = function (userId, logId, itemId) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item/' + itemId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return FooditemService;
}());
FooditemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FooditemService);

var _a;
//# sourceMappingURL=fooditem.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/foodlog.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodlogService = (function () {
    function FoodlogService(http) {
        this.http = http;
        this.api = {
            'createFoodlog': this.createFoodlog,
            'findFoodlogsByUser': this.findFoodlogsByUser,
            'findFoodLogById': this.findFoodLogById,
            'updateFoodlog': this.updateFoodlog,
            'deleteFoodLog': this.deleteFoodlog
        };
        this.domain_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    FoodlogService.prototype.createFoodlog = function (userId, foodlog) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog';
        return this.http.post(url, foodlog)
            .map(function (response) {
            return response.json();
        });
    };
    FoodlogService.prototype.findFoodlogsByUser = function (userId) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    FoodlogService.prototype.findFoodLogById = function (userId, logId) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    FoodlogService.prototype.updateFoodlog = function (userId, updatedlog) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + updatedlog._id;
        return this.http.put(url, updatedlog)
            .map(function (response) {
            return response.json();
        });
    };
    FoodlogService.prototype.deleteFoodlog = function (userId, logId) {
        var url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return FoodlogService;
}());
FoodlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FoodlogService);

var _a;
//# sourceMappingURL=foodlog.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/nutrionixAPI.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutrionixAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NutrionixAPIService = (function () {
    function NutrionixAPIService(http) {
        this.http = http;
        this.api = {
            'searchFoodByName': this.searchFoodByName
        };
    }
    NutrionixAPIService.prototype.searchFoodByName = function (name) {
        var url = 'https://api.nutritionix.com/v1_1/search/' + name +
            '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_sugars%2Cnf_dietary_fiber%2Cnf_protein%2Cnf_sodium%2Cnf_total_fat&appId=e6ce2c51&appKey=82b443c9f9191e8bc996127502a53d00';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return NutrionixAPIService;
}());
NutrionixAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], NutrionixAPIService);

var _a;
//# sourceMappingURL=nutrionixAPI.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shares.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shares.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shares_service_client__ = __webpack_require__("../../../../../src/app/services/shares.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.domain_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'login': this.login,
            'register': this.register,
            'logout': this.logout,
            'loggedIn': this.loggedIn,
            'createUser': this.createUser,
            'findUserByCredentials': this.findUserByCredentials,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser
        };
    }
    UserService.prototype.register = function (username, password) {
        var url = this.domain_url + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.domain_url + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.isAdmin = function () {
        var _this = this;
        var url = this.domain_url + '/api/admin/isAdmin';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.logout = function () {
        var url = this.domain_url + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.domain_url + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.findAllUsers = function () {
        var url = this.domain_url + '/api/admin/user';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.domain_url + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.domain_url + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.domain_url + '/api/user/?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.domain_url + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, updateduser) {
        var url = this.domain_url + '/api/user/' + userId;
        return this.http.put(url, updateduser)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shares_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shares_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://logdownproject.herokuapp.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map