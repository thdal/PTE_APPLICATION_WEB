import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/Pages/login/login.component';
import { RegisterComponent } from './user/Pages/register/register.component';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

// services
import { InterceptorService } from './_services/interceptor.service';
import { UserService } from './_services/user.service';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuLeftComponent } from './menu/menu-left/menu-left.component';
import { EventListComponent } from './event/Composants/event-list/event-list.component';
import {JwPaginationModule} from "jw-angular-pagination";
import { AddEventComponent } from './event/Pages/add-event/add-event.component';
import { EventFormComponent } from './event/Composants/event-form/event-form.component';
import { MyEventsComponent } from './event/Pages/my-events/my-events.component';
import { SetEventComponent } from './event/Pages/set-event/set-event.component';
import { ShowEventComponent } from './event/Pages/show-event/show-event.component';
import { EventViewComponent } from './event/Composants/event-view/event-view.component';
import { EventPaginationComponent } from './event/Composants/event-pagination/event-pagination.component';
import { ProfileFormComponent } from './user/Composants/profile-form/profile-form.component';
import { EditUserProfileComponent } from './user/Pages/edit-user-profile/edit-user-profile.component';
import { UsersListComponent } from './user/Composants/users-list/users-list.component';
import { UserAdministrationComponent } from './user/Pages/user-administration/user-administration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuTopComponent,
    MenuLeftComponent,
    EventListComponent,
    AddEventComponent,
    EventFormComponent,
    MyEventsComponent,
    SetEventComponent,
    ShowEventComponent,
    EventViewComponent,
    EventPaginationComponent,
    ProfileFormComponent,
    EditUserProfileComponent,
    UsersListComponent,
    UserAdministrationComponent
  ],
  imports: [
    JwPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [DatePipe, UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}], //
  bootstrap: [AppComponent]
})
export class AppModule { }






