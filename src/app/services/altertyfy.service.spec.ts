import { TestBed } from '@angular/core/testing';

import { AltertyfyService } from './altertyfy.service';

describe('AltertyfyService', () => {
  let service: AltertyfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltertyfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
