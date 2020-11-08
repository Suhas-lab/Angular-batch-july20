import { TestBed } from '@angular/core/testing';

import { CommonendpointService } from './commonendpoint.service';

describe('CommonendpointService', () => {
  let service: CommonendpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonendpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
