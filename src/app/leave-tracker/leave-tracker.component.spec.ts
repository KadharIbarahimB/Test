import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTrackerComponent } from './leave-tracker.component';

describe('LeaveTrackerComponent', () => {
  let component: LeaveTrackerComponent;
  let fixture: ComponentFixture<LeaveTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveTrackerComponent]
    });
    fixture = TestBed.createComponent(LeaveTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
