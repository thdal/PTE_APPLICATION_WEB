import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EventService} from "../../_services/event.service";


@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  eventTypesRecord : [];
  eventCanalsRecord : [];
  @Output() sortEvent = new EventEmitter<any>();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEventTypes();
    this.getEventCanals();
  }

  getEventTypes(){
    this.eventService.getEventTypes().subscribe(data => {
      this.eventTypesRecord = data;
    },error => {
      console.log('oops', error);
    });
  }

  getEventCanals(){
    this.eventService.getEventCanals().subscribe(data => {
      this.eventCanalsRecord = data;
    },error => {
      console.log('oops', error);
    });
  }

  sortByType(typeId: number){
    let objSort = {sortBy: "type", id: typeId}
    this.sortEventList(objSort);
  }

  sortByCanal(canalId: number){
    let objSort = {sortBy: "canal", id: canalId}
    this.sortEventList(objSort);
  }

  getAllEvents(){
    let objSort = {sortBy: "all"}
    this.sortEventList(objSort);
  }

  sortEventList($event: any){
    this.sortEvent.emit($event)
  }

}
