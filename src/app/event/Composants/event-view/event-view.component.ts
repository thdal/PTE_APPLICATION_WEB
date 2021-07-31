import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {EventService} from "../../../_services/event.service";
import {Event} from "../../../_models/event";

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  eventOpen : Event;
  eventId : any;
  typeName = "";
  canalName = "";

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit(): void {
    //J'init l'object en attendant le subscribe qui suit
    this.eventOpen = new Event();
    this.getEventbyId();
  }

  //Récupére un événement particulier (pour la modification)
  getEventbyId(){
    //On récupére l'id depuis la route avec un observable
    this.activatedRoute.paramMap.subscribe(params => {
      this.eventId = params.get('eventId');
      //On envoie l'id au service et on met à jour le formulaire
      this.eventService.getEventById(this.eventId).subscribe(data => {
        this.eventOpen = data;
        this.getEventTypes();
        this.getEventCanals();
      });
    });
  }

//Récupére les catégories/types d'événements (Culturel, Artistique ect..)
  getEventTypes(){
    this.eventService.getEventTypes().subscribe(data => {
      data.forEach((item) => {
        if(item.id == this.eventOpen.typeEventId){
          this.typeName = item.typeEventName;
        }
      });
    });
  }
  //Récupére les canaux d'événements (Twitch, Facebook ect..)
  getEventCanals(){
    this.eventService.getEventCanals().subscribe(data => {
      data.forEach((item) => {
        if(item.id == this.eventOpen.canalEventId){
          this.canalName = item.canalEventName;
        }
      });
    });
  }

}
