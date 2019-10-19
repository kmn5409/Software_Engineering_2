import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAlertsPage } from './parent-alerts.page';

describe('ParentAlertsPage', () => {
  let component: ParentAlertsPage;
  let fixture: ComponentFixture<ParentAlertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAlertsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
