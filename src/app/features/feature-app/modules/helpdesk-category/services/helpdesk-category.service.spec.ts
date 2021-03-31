import { TestBed } from '@angular/core/testing';

import { HelpdeskCategoryService } from './helpdesk-category.service';

describe('HelpdeskCategoryService', () => {
  let service: HelpdeskCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpdeskCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
