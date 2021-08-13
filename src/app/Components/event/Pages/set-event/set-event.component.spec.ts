import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEventComponent } from './set-event.component';

describe('SetEventComponent', () => {
  let component: SetEventComponent;
  let fixture: ComponentFixture<SetEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
