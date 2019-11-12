import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAlertsPage } from './student-alerts.page';

describe('StudentAlertsPage', () => {
  let component: StudentAlertsPage;
  let fixture: ComponentFixture<StudentAlertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAlertsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
