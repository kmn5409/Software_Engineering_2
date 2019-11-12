import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogsPage } from './student-logs.page';

describe('StudentLogsPage', () => {
  let component: StudentLogsPage;
  let fixture: ComponentFixture<StudentLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
