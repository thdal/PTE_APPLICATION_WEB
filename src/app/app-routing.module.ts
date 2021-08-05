import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

/**Components */
import { LoginComponent } from './Components/user/Pages/login/login.component';
import { RegisterComponent } from './Components/user/Pages/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import {AddEventComponent} from "./Components/event/Pages/add-event/add-event.component";
import {MyEventsComponent} from "./Components/event/Pages/my-events/my-events.component";
import {SetEventComponent} from "./Components/event/Pages/set-event/set-event.component";
import {ShowEventComponent} from "./Components/event/Pages/show-event/show-event.component";
import {EditUserProfileComponent} from "./Components/user/Pages/edit-user-profile/edit-user-profile.component";
import {UserAdministrationComponent} from "./Components/user/Pages/user-administration/user-administration.component";

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
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
