import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const authservice = inject(AuthService);
  const router = inject(Router);

  if (authservice.getRole() !== 'admin') {
    router.navigateByUrl('/user')
    return false
  }
  return true

};
