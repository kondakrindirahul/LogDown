/**
 * Created by sesha on 7/26/17.
 */

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './components/test/test.component';

import { LoginComponent } from "./components/user/login/login.component";
import { RegisterComponent } from "./components/user/register/register.component";
import { ProfileComponent } from "./components/user/profile/profile.component";

import { FoodlogListComponent } from "./components/foodlog/foodlog-list/foodlog-list.component";
import { FoodlogEditComponent } from "./components/foodlog/foodlog-edit/foodlog-edit.component";
import { FoodlogNewComponent } from "./components/foodlog/foodlog-new/foodlog-new.component";
import { FooditemListComponent } from "./components/fooditem/fooditem-list/fooditem-list.component";
import { FooditemNewComponent } from "./components/fooditem/fooditem-new/fooditem-new.component";


const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'profile/:userId/foodlog', component: FoodlogListComponent, pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/new', component: FoodlogNewComponent, pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/:logId', component: FoodlogEditComponent, pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/:logId/item', component: FooditemListComponent, pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/:logId/item/:time', component: FooditemNewComponent, pathMatch: 'full'}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
