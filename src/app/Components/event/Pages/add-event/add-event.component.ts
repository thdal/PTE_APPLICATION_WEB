import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css', '../../../../../assets/css/global-pages.css']
})
export class AddEventComponent implements OnInit {
  mobile = false;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 480) { // 768px portrait
      this.mobile = true;
    }
  }

}
