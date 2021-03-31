import { TestBed } from '@angular/core/testing';

import { HelpAndSupportService } from './help-and-support.service';

describe('HelpAndSupportService', () => {
  let service: HelpAndSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpAndSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
