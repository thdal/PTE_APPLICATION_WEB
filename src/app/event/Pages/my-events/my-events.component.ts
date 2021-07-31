import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuLeftComponent} from "../../../menu/menu-left/menu-left.component";

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css','../../../../assets/css/global-pages.css']
})
export class MyEventsComponent implements OnInit {
  public currentUser;
  sortParam:string;
  @ViewChild(MenuLeftComponent) child;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  ngOnInit() {

  }

  receiveSortingParameter($event) {
    $event["userId"] = this.currentUser.id;
    this.sortParam = $event
  }

}
