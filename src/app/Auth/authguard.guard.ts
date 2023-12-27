import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {
  return inject(AuthServiceService).isLoggedIn();
};
