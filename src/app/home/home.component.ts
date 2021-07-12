import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuLeftComponent} from "../menu/menu-left/menu-left.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentUser;
  sortParam:string;
  @ViewChild(MenuLeftComponent) child;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  ngOnInit() {

  }

  receiveSortingParameter($event) {
    console.log("obj?")
    console.log($event)
    this.sortParam = $event
  }

}
