import { TestBed } from '@angular/core/testing';

import { GuestMiddlewareService } from './guest-middleware.service';

describe('GuestMiddlewareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestMiddlewareService = TestBed.get(GuestMiddlewareService);
    expect(service).toBeTruthy();
  });
});
