import { TestBed } from '@angular/core/testing';

import { CarInfoDataService } from './data.carinfo.service';

describe('DataService', () => {
  let service: CarInfoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarInfoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
