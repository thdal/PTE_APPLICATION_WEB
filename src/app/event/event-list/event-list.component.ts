import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { EventService} from "../../_services/event.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  pageOfItems: Array<any>;
  pageSize = 8;
  recEvents = [];
  errorNotFound= false;
  @Input() sortParam: string;


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  getEvents(){
    this.eventService.getEvents().subscribe(data => {
      this.recEvents = data;
      this.errorNotFound = false;
    },error => {
      if(error.status == 404)
        this.errorNotFound = true;
      console.log('oops', error);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let sortRecord = changes.sortParam.currentValue;
    if(sortRecord != undefined || sortRecord != null){
      if(sortRecord.sortBy == 'all'){
        this.getEvents();
      }else if (sortRecord.sortBy == "type"){
        let typeId = sortRecord.id;
        this.eventService.getEventsByType(typeId).subscribe(data =>{
          this.recEvents = data;
          this.errorNotFound = false;
        },error => {
          if(error.status == 404)
            this.errorNotFound = true;
          console.log('oops', error);
        });
      }else if (sortRecord.sortBy == "canal"){
        let canalId = sortRecord.id;
        this.eventService.getEventsByCanal(canalId).subscribe(data =>{
          this.recEvents = data;
          this.errorNotFound = false;
        },error => {
          if(error.status == 404)
            this.errorNotFound = true;
          console.log('oops', error);
        });
      }
    }
  }
}
