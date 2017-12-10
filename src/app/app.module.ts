import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';


import { UserService } from "./services/user.service.client";
import { FoodlogService } from "./services/foodlog.service.client";
import { FooditemService } from "./services/fooditem.service.client";
import { NutrionixAPIService } from "./services/nutrionixAPI.service.client";
import { SharedService } from "./services/shares.service.client";

import { FoodlogListComponent } from "./components/foodlog/foodlog-list/foodlog-list.component";
import { FoodlogEditComponent } from './components/foodlog/foodlog-edit/foodlog-edit.component';
import { FoodlogNewComponent } from './components/foodlog/foodlog-new/foodlog-new.component';
import { FooditemListComponent } from './components/fooditem/fooditem-list/fooditem-list.component';
import { FooditemNewComponent } from './components/fooditem/fooditem-new/fooditem-new.component';
import { FooditemEditComponent } from './components/fooditem/fooditem-edit/fooditem-edit.component';
import { AuthenticationService } from "./services/authentication.service.client";
import { AdminUserListComponent } from './components/user/admin-user-list/admin-user-list.component';
import {AdminServiceClient} from "./services/admin.service.client";


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FoodlogListComponent,
    FoodlogEditComponent,
    FoodlogNewComponent,
    FooditemListComponent,
    FooditemNewComponent,
    FooditemEditComponent,
    AdminUserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [
    TestService,
    UserService,
    FoodlogService,
    FooditemService,
    NutrionixAPIService,
    SharedService,
    AuthenticationService,
    AdminServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
