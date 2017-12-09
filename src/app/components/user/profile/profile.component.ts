import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../services/user.service.client";
import { User } from "../../../models/user.model.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String;
  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  update() {

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['userId'];
        this.user = this.userService.findUserById(this.userId);
      });
  }

}
