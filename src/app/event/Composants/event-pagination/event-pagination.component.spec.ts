import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPaginationComponent } from './event-pagination.component';

describe('EventPaginationComponent', () => {
  let component: EventPaginationComponent;
  let fixture: ComponentFixture<EventPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
