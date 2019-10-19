import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOverviewPage } from './parent-overview.page';

describe('ParentOverviewPage', () => {
  let component: ParentOverviewPage;
  let fixture: ComponentFixture<ParentOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
