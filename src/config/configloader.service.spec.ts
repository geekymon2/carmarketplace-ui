import { TestBed } from '@angular/core/testing';

import { ConfigLoaderService } from './configloader.service';

describe('ConfigLoaderService', () => {
  let service: ConfigLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
