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

  constructor(private http: HttpClient) { }

  //Tous les événements
  getAllEvents(){
    return this.http.get<any>(`api/events`);
  }
  //Les événements d'un utilisateur particulier (l'utilisateur connecté)
  getAllEventsByUser(userId){
    return this.http.get<any>(`api/events/${userId}`);
  }
  //Les événements du jour
  getEventsOfTheDay(){
    return this.http.get<any>(`api/events/oftheday`);
  }
  //Les évenements du jour pour un utilisateur
  getEventsOfTheDayByUser(userId){
    return this.http.get<any>(`api/events/oftheday/${userId}`);
  }
  //Un événement spécifique avec son id
  getEventById(eventId){
    return this.http.get<any>(`api/event/${eventId}`);
  }
  //Les événément par type
  getEventsByType(typeId, userId){
    //let params = new HttpParams().set("typeId",typeId); //Create new HttpParams
    return this.http.get<any>(`api/events/type/${typeId}/${userId}`); //On passe dans l'url pour l'instant
  }
  //Les événément par canal
  getEventsByCanal(canalId, userId){
    return this.http.get<any>(`api/events/canal/${canalId}/${userId}`); //On passe dans l'url pour l'instant
  }
  //Les catégories/types d'événements(Culturel, artistique ect..)
  getEventTypes() {
      return this.http.get<any>(`api/eventTypes`);
  }
  //Les canaux d'événements (Twitch, Facebook ect..)
  getEventCanals() {
    return this.http.get<any>(`api/eventCanals`);
  }
  //Cherche les événements entre deux dates
  getEventsWithDate(dates) {
    console.log(dates);
    let params = new HttpParams().set('dates', dates);
    console.log(params);
    return this.http.get<any>(`api/eventsWithDates`, {params: params});
  }
  //Cherche les événements entre deux dates poru un utilisateur
  getEventsWithDateByUser(dates, userId) {
    let params = new HttpParams().set('dates', dates);
    return this.http.get<any>(`api/eventsWithDates/${userId}`, {params: params});
  }
  //On post un événement
  postEvent(event: Event, formData) {
    //Si on a pas d'image on force qd même le formdata
    if(!formData){
      formData = new FormData();
      formData.append("event", JSON.stringify(event));
    }else{
      formData.append("event", JSON.stringify(event));
    }
    return this.http.post<any>(`api/events`, formData);
  }
  //On update un événement
  updateEvent(eventId, event: Event, formData) {
    //Si on a pas d'image on force qd même le formdata
    if(!formData){
      formData = new FormData();
      formData.append("event", JSON.stringify(event));
    }else{
      formData.append("event", JSON.stringify(event));
    }
    return this.http.put<any>(`api/events/${eventId}`, formData);
  }
  //On supprime un événement
  deleteEvent(eventId){
    return this.http.delete<any>(`api/event/${eventId}`);
  }
}
