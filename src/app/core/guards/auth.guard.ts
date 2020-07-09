import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
  	private auth: AuthService,
  	private router: Router
  ) {}

  canActivate(): boolean {
    if (this.auth.getCookie('user')) {
    	return true;
    } else {
    	this.router.navigateByUrl('/login');
    	return false;
    }
  }
  
}
