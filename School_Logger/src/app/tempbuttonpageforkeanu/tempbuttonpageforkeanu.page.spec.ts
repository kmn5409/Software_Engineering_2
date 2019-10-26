import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempbuttonpageforkeanuPage } from './tempbuttonpageforkeanu.page';

describe('TempbuttonpageforkeanuPage', () => {
  let component: TempbuttonpageforkeanuPage;
  let fixture: ComponentFixture<TempbuttonpageforkeanuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempbuttonpageforkeanuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempbuttonpageforkeanuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
