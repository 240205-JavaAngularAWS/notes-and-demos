import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // If we return true here, then the user CAN pass through and if we return false they CANNOT

  // Our authservice has a method that we can use to validate that a user is logged in, so we'll inject that service here and then use it for validation
  let authService: AuthService = inject(AuthService); // We have to do this since we don't have a constructor since this is just a function
  let successfulLogin: boolean = authService.validateLoggedIn();

  if (successfulLogin){
    // This means a user is logged in
    return true;
  }

  // If the user isn't successfully logged in, it actually makes sense to just reroute them to the login page so they can do so
  let router: Router = inject(Router);
  router.navigate(['login'])
  return false;
};
