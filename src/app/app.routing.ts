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
import { AdminUserListComponent } from "./components/user/admin-user-list/admin-user-list.component";

import { AuthenticationService } from "./services/authentication.service.client";
import { AdminServiceClient } from "./services/admin.service.client";

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/user', component: AdminUserListComponent, canActivate: [AdminServiceClient] },
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService] },
  {path: 'profile/:userId/foodlog', component: FoodlogListComponent, canActivate: [AuthenticationService], pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/new', component: FoodlogNewComponent, canActivate: [AuthenticationService], pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/:logId', component: FoodlogEditComponent, canActivate: [AuthenticationService], pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/:logId/item', component: FooditemListComponent, canActivate: [AuthenticationService], pathMatch: 'full'},
  {path: 'profile/:userId/foodlog/:logId/item/:time', component: FooditemNewComponent, canActivate: [AuthenticationService], pathMatch: 'full'}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
