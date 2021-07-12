import { Component, OnInit } from '@angular/core';
import {User} from "../../_models/user";
import {AuthenticationService} from "../../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  addAnEvent() {
    this.router.navigate(['/addAnEvent']);
  }
}
