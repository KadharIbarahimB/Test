import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyNavComponent } from './add-company-nav.component';

describe('AddCompanyNavComponent', () => {
  let component: AddCompanyNavComponent;
  let fixture: ComponentFixture<AddCompanyNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompanyNavComponent]
    });
    fixture = TestBed.createComponent(AddCompanyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
