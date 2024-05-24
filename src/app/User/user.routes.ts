import { Routes } from '@angular/router';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserComponent } from './user.component';

const userChlid: Routes = [
    { path: "", component: UserHomePageComponent },
    { path: "about", component: UserAboutComponent },
    { path: "contact", component: UserContactComponent },

]
export const userRoutes: Routes = [
    { path: "", component: UserComponent, children: userChlid },

];
