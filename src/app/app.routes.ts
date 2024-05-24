import { Routes } from '@angular/router';
import { adminRoutes } from './Admin/admin.routes';
import { authGuardGuard } from './Service/Auth/auth-guard.guard';
import { LoginComponent } from './shared/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { userRoutes } from './User/user.routes';

export const routes: Routes = [
    // { path: "", redirectTo: "user", pathMatch: "full" },
    { path: 'login', component: LoginComponent, title: "Login" },
    { path: "admin", children: adminRoutes, canActivate: [authGuardGuard] },
    { path: "", children: userRoutes },
    { path: "**", component: PageNotFoundComponent, title: "Page Not Found" }
];
