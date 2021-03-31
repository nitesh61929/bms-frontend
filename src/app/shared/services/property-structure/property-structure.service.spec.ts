import { TestBed } from '@angular/core/testing';

import { PropertyStructureService } from './property-structure.service';

describe('PropertyStructureService', () => {
  let service: PropertyStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
