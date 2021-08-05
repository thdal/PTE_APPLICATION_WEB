import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css','../../../../../assets/css/global-pages.css']
})
export class ShowEventComponent implements OnInit {
  mobile = false;


  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 480) { // 768px portrait
      this.mobile = true;
    }
  }

}
