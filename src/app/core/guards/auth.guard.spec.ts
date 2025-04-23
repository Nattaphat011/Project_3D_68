import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (route, state) => 
      TestBed.runInInjectionContext(() => inject(AuthGuard).canActivate(route, state));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
function inject<T>(token: new (...args: any[]) => T): T {
  return TestBed.inject(token);
}

