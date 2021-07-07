import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

// services
import { InterceptorService } from './_services/interceptor.service';
import { UserService } from './_services/user.service';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuLeftComponent } from './menu/menu-left/menu-left.component';
import { EventListComponent } from './event/event-list/event-list.component';
import {JwPaginationModule} from "jw-angular-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuTopComponent,
    MenuLeftComponent,
    EventListComponent
  ],
  imports: [
    JwPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}], //
  bootstrap: [AppComponent]
})
export class AppModule { }






