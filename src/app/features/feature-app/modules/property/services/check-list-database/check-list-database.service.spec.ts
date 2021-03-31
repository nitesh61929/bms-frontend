import { TestBed } from '@angular/core/testing';

import { CheckListDatabaseService } from './check-list-database.service';

describe('CheckListDatabaseService', () => {
  let service: CheckListDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckListDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
