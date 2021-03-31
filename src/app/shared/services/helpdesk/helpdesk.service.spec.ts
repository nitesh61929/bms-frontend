import { TestBed } from '@angular/core/testing';

import { HelpdeskService } from './helpdesk.service';

describe('HelpdeskService', () => {
  let service: HelpdeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpdeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
