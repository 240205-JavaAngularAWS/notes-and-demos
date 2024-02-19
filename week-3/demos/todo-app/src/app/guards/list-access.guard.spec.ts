import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { listAccessGuard } from './list-access.guard';

describe('listAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => listAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
