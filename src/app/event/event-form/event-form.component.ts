import { Component, OnInit, ElementRef } from '@angular/core';
import { EventService} from "../../_services/event.service";
import { ToastrService } from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  public currentUser;
  eventForm: FormGroup;
  eventTypesRecord : [];
  eventCanalsRecord : [];
  submitted = false;
  loading = false;
  fileToUpload: File | null = null;

  constructor(private formBuilder: FormBuilder,private eventService: EventService,private toastr: ToastrService,
  private htmlelem: ElementRef) {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
    console.log(this.currentUser);
  }

  ngOnInit(): void {
      this.eventForm = this.formBuilder.group({
        eventName: ['eventName', Validators.required],
        eventDate: ['2020-12-01', Validators.required],
        eventLink: ['www.test.com', Validators.required],
        eventAddress: ['Bordeaux', Validators.required],
        eventDescription: [''],
        typeEventId: [1, Validators.required],
        canalEventId: [1, Validators.required]
    });
    this.getEventTypes();
    this.getEventCanals();
  }

  get fval() { return this.eventForm.controls; }

  getEventTypes(){
    this.eventService.getEventTypes().subscribe(data => {
      this.eventTypesRecord = data;
    });
  }

  getEventCanals(){
    this.eventService.getEventCanals().subscribe(data => {
      this.eventCanalsRecord = data;
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log("fichieruploadé")
    console.log(this.fileToUpload);
    (document.getElementById('output') as HTMLImageElement).src = URL.createObjectURL(this.fileToUpload);
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.eventForm.invalid) {
      return;
    }
    this.loading = true;
    this.eventForm.addControl('userId', this.formBuilder.control(this.currentUser.id));
    this.eventService.postEvent(this.eventForm.value).subscribe(
      (data)=>{
        this.loading = false;
        alert('Event posted successfully!!');
      },
      (error)=>{
        this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )
  }




}
