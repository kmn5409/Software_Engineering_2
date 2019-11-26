import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogPage } from './student-log.page';

describe('StudentLogPage', () => {
  let component: StudentLogPage;
  let fixture: ComponentFixture<StudentLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
