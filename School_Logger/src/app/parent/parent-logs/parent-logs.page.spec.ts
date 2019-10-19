import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLogsPage } from './parent-logs.page';

describe('ParentLogsPage', () => {
  let component: ParentLogsPage;
  let fixture: ComponentFixture<ParentLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
