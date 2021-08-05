import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-set-event',
  templateUrl: './set-event.component.html',
  styleUrls: ['./set-event.component.css','../../../../../assets/css/global-pages.css']
})
export class SetEventComponent implements OnInit {
  mobile = false;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 480) { // 768px portrait
      this.mobile = true;
    }
  }

}
