import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { EventListComponent } from './event-list.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ EventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/


  describe('Event list TDD', () => {
    it('should be sorted alphabetical DESC', () => {
      var tab1 = [{eventName: 'A'},{eventName: 'B'},{eventName: 'C'},{eventName: 'D'}];
      var tab2 = [{eventName: 'D'},{eventName: 'C'},{eventName: 'B'},{eventName: 'A'}];
      expect(component.sortArrayDescAlpha(tab1)).toEqual(tab2);
    });
    it('should be sorted alphabetical ASC', () => {
      var tab1 = [{eventName: 'A'},{eventName: 'B'},{eventName: 'C'},{eventName: 'D'}];
      var tab2 = [{eventName: 'D'},{eventName: 'C'},{eventName: 'B'},{eventName: 'A'}];
      expect(component.sortArrayAscAlpha(tab2)).toEqual(tab1);
    });
    it('should be sorted by date DESC OLDEST FIRST', () => {
      var tab1 = [{eventDate: '2021-12-01'},{eventDate: '2021-11-01'},{eventDate: '2021-10-01'},{eventDate: '2021-09-01'}];
      var tab2 = [{eventDate: '2021-09-01'},{eventDate: '2021-10-01'},{eventDate: '2021-11-01'},{eventDate: '2021-12-01'}];
      expect(component.sortArrayDescDate(tab1)).toEqual(tab2);
    });
    it('should be sorted by date ASC RECENT FIRST', () => {
      var tab1 = [{eventDate: '2021-12-01'},{eventDate: '2021-11-01'},{eventDate: '2021-10-01'},{eventDate: '2021-09-01'}];
      var tab2 = [{eventDate: '2021-09-01'},{eventDate: '2021-10-01'},{eventDate: '2021-11-01'},{eventDate: '2021-12-01'}];
      expect(component.sortArrayAscDate(tab2)).toEqual(tab1);
    });
  });
});


