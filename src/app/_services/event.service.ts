import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventType } from "../_models/eventType";
import { Event } from "../_models/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public eventType: Observable<EventType>;

  constructor(private http: HttpClient) {

  }

  getEvents(){
    return this.http.get<any>(`events`);
  }

  getEventsByType(typeId){
    let params = new HttpParams().set("typeId",typeId); //Create new HttpParams
    return this.http.get<any>(`events/type/${typeId}`); //On passe dans l'url pour l'instant
  }

  getEventsByCanal(canalId){
    let params = new HttpParams().set("canalId",canalId); //Create new HttpParams
    return this.http.get<any>(`events/canal/${canalId}`); //On passe dans l'url pour l'instant
  }

  getEventTypes() {
      return this.http.get<any>(`eventTypes`);
  }

  getEventCanals() {
    return this.http.get<any>(`eventCanals`);
  }

  postEvent(event: Event) {
    return this.http.post<any>(`events`, event);
  }
}
