import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { RoleGuard } from './role.guard';

describe('roleGuard', () => {
  const executeGuard: CanActivateFn = (route, state) => 
      TestBed.runInInjectionContext(() => inject(RoleGuard).canActivate(route, state));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
