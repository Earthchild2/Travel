import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const authUser = inject(AuthService).isAuthenticatedUser;

  if (authUser()) {
    return true;
  } else

  inject(Router).navigate(['/login'])
  return false;
};
