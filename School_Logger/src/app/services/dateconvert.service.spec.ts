import { TestBed } from '@angular/core/testing';

import { DateconvertService } from './dateconvert.service';

describe('DateconvertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateconvertService = TestBed.get(DateconvertService);
    expect(service).toBeTruthy();
  });
});
