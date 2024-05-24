import { Routes } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminComponent } from './admin.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const adminChildRoutes: Routes = [
    { path: "", component: AdminHomePageComponent },
    { path: "create-user", component: CreateUserComponent },
    { path: "allusers", component: UserDetailsComponent },
];
export const adminRoutes: Routes = [
    { path: "", component: AdminComponent, children: adminChildRoutes }
];
