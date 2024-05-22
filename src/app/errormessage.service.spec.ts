import { TestBed } from '@angular/core/testing';

import { ErrorMessageService } from './errormessage.service';

describe('GlobalErrorHandlerService', () => {
  let service: ErrorMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
