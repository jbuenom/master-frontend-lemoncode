import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let isLogged = false;

  inject(AuthService).isLogged.subscribe(value => {
    if(value){
      isLogged = true;
     } else {
       isLogged = false;
       inject(Router).navigate(['/login']);
     }
  })
  
  return isLogged;
};
