import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/user/Pages/login/login.component';
import { RegisterComponent } from './Components/user/Pages/register/register.component';
import { AppRoutingModule } from './app-routing.module';

import {ShareButtonsModule} from "ngx-sharebuttons/buttons";
import {ShareIconsModule} from "ngx-sharebuttons/icons";

import { ToastrModule } from 'ngx-toastr';

// services
import { InterceptorService } from './_services/interceptor.service';
import { UserService } from './_services/user.service';
import { MenuTopComponent } from './Components/menu/menu-top/menu-top.component';
import { MenuLeftComponent } from './Components/menu/menu-left/menu-left.component';
import { EventListComponent } from './Components/event/Composants/event-list/event-list.component';
import {JwPaginationModule} from "jw-angular-pagination";
import { AddEventComponent } from './Components/event/Pages/add-event/add-event.component';
import { EventFormComponent } from './Components/event/Composants/event-form/event-form.component';
import { MyEventsComponent } from './Components/event/Pages/my-events/my-events.component';
import { SetEventComponent } from './Components/event/Pages/set-event/set-event.component';
import { ShowEventComponent } from './Components/event/Pages/show-event/show-event.component';
import { EventViewComponent } from './Components/event/Composants/event-view/event-view.component';
import { EventPaginationComponent } from './Components/event/Composants/event-pagination/event-pagination.component';
import { ProfileFormComponent } from './Components/user/Composants/profile-form/profile-form.component';
import { EditUserProfileComponent } from './Components/user/Pages/edit-user-profile/edit-user-profile.component';
import { UsersListComponent } from './Components/user/Composants/users-list/users-list.component';
import { UserAdministrationComponent } from './Components/user/Pages/user-administration/user-administration.component';
import { EventNotFoundComponent } from './Components/event/Composants/event-not-found/event-not-found.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PrivacyPolicyComponent } from './Components/resources/Pages/privacy-policy/privacy-policy.component';
import { LegalNoticesComponent } from './Components/resources/Pages/legal-notices/legal-notices.component';
import { CguComponent } from './Components/resources/Pages/cgu/cgu.component';

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
    UserAdministrationComponent,
    EventNotFoundComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    LegalNoticesComponent,
    CguComponent,
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
    ToastrModule.forRoot(),
    ShareButtonsModule.withConfig({
      debug:true,
    }),
    ShareIconsModule,
  ],
  providers: [DatePipe, UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}], //
  bootstrap: [AppComponent]
})
export class AppModule { }






