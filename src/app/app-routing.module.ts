import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

/**Components */
import { LoginComponent } from './user/Pages/login/login.component';
import { RegisterComponent } from './user/Pages/register/register.component';
import { HomeComponent } from './home/home.component';
import {AddEventComponent} from "./event/Pages/add-event/add-event.component";
import {MyEventsComponent} from "./event/Pages/my-events/my-events.component";
import {SetEventComponent} from "./event/Pages/set-event/set-event.component";
import {ShowEventComponent} from "./event/Pages/show-event/show-event.component";
import {EditUserProfileComponent} from "./user/Pages/edit-user-profile/edit-user-profile.component";
import {UserAdministrationComponent} from "./user/Pages/user-administration/user-administration.component";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addAnEvent',
    component: AddEventComponent
  },
  {
    path: 'manageUsers',
    component: UserAdministrationComponent
  },
  {
    path: 'editProfile/:userId',
    component: EditUserProfileComponent
  },
  {
    path: 'eventsList/:userId',
    component: MyEventsComponent
  },
  {
    path: 'setEvent/:eventId',
    component: SetEventComponent
  },
  {
    path: 'showEvent/:eventId',
    component: ShowEventComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
