import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EventService} from "../../../_services/event.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  eventTypesRecord : [];
  eventCanalsRecord : [];
  @Output() sortEvent = new EventEmitter<any>();
  iconHeight = 25;
  iconWidth = 25
  //Servira à afficher le bouton cliqué
  selectedCatIndex: number = null;
  selectedCanalIndex: number = null;
  getAllSelected: boolean = false;
  getAllOfTheDaySelected: boolean = false;

  constructor(private eventService: EventService,private route: ActivatedRoute,
              private router: Router) {
      if (typeof this.route.component !== "string") {
        //Double test
        if(this.route.component.name == 'HomeComponent' || this.route.snapshot.url.length == 0){
          this.getAllOfTheDaySelected = !this.getAllOfTheDaySelected;
        }
      }
  }

  ngOnInit(): void {
    this.getEventTypes();
    this.getEventCanals();
  }

  //Récupération des catégories/types d'événements (Culturel, Art ect..)
  getEventTypes(){
    this.eventService.getEventTypes().subscribe(data => {
      this.eventTypesRecord = data;
    },error => {
      console.log('oops', error);
    });
  }
  //Récupération des canaux (Youtube, Twitch ect..)
  getEventCanals(){
    this.eventService.getEventCanals().subscribe(data => {
      this.eventCanalsRecord = data;
    },error => {
      console.log('oops', error);
    });
  }
  //On trie par type
  sortByType(typeId: number, typeName:string){
    let objSort = {sortByType: true, id: typeId, name: typeName}
    this.sortEventList(objSort);
  }
  //On trie par canal
  sortByCanal(canalId: number, canalName: string){
    let objSort = {sortByCanal: true, id: canalId, name: canalName}
    this.sortEventList(objSort);
  }
  //On récupére tous les évenements
  getAllEvents(){
    this.resetActivatedClass();
    this.getAllSelected = !this.getAllSelected;
    let objSort = {getAll: true}
    this.sortEventList(objSort);
  }
  //On récupére les événements du jour seulements
  getEventsOfTheDay(){
    this.resetActivatedClass();
    this.getAllOfTheDaySelected = !this.getAllOfTheDaySelected;
    let objSort = {getEventsOfTheDay: true}
    this.sortEventList(objSort);
  }
  //On recherche un événément avec l'input de recherche
  searchInput($event){
    console.log("onchangeInput?");
    console.log($event.target.value)
    let objSort = {searchInput: true, val: $event.target.value};
    this.sortEventList(objSort);
  }
  //On déclenche la fonction emit  de notre composant qui communique avec le parent, le parent reçoit la donnée dans receiveSortingParameter($event) (et quand il est nécessaire on ajoute l'id de l'utilisateur à ce moment là dans le parent) et l'envoie à la variable sortParam du composant event-list, à chaque modification la fonction ngOnChanges(...) du composant event-list est appelée et traite la data pour faire le tri.
  //Au final notre valeur aura transitée dans 3 composants
  sortEventList($event: any){
    this.sortEvent.emit($event)
  }

  //On supprime les accents qui viennent de la bdd pour matcher avec les assets (img)
  // et pouvoir les afficher car il n'aime pas les accent
  removeAccent(str){
    return str.replace(new RegExp(/[èéêë]/g),"e");
  }

  activateClass(subModule){
    subModule.active = !subModule.active;
  }


  setCatIndex(index: number) {
    this.resetActivatedClass();
    this.selectedCatIndex = index;
  }

  setCanalIndex(index: number) {
    this.resetActivatedClass();
    this.selectedCanalIndex = index;
  }

  resetActivatedClass(){
    if(this.selectedCanalIndex)
      this.selectedCanalIndex = null;
    if(this.selectedCatIndex)
      this.selectedCatIndex = null;
    if(this.getAllSelected)
      this.getAllSelected = false;
    if(this.getAllOfTheDaySelected)
      this.getAllOfTheDaySelected = false;
  }

}
