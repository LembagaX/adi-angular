import { TestBed } from '@angular/core/testing';

import { AssemblyService } from './assembly.service';

describe('AssemblyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssemblyService = TestBed.get(AssemblyService);
    expect(service).toBeTruthy();
  });
});
