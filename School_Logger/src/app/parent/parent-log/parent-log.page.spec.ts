import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLogPage } from './parent-log.page';

describe('ParentLogPage', () => {
  let component: ParentLogPage;
  let fixture: ComponentFixture<ParentLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
