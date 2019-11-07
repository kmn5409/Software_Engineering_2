import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOverviewPage } from './student-overview.page';

describe('StudentOverviewPage', () => {
  let component: StudentOverviewPage;
  let fixture: ComponentFixture<StudentOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
