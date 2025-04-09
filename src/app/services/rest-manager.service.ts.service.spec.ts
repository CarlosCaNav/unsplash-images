import { TestBed } from '@angular/core/testing';

import { RestManagerServiceTsService } from './rest-manager.service.ts.service';

describe('RestManagerServiceTsService', () => {
  let service: RestManagerServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestManagerServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
