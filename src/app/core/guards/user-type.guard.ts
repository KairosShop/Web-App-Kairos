import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {
  
  constructor(
  	private auth: AuthService,
  	private router: Router
  ) {}

  canActivate({routeConfig}):boolean {
  	const path = routeConfig.path;
  	const cookie = this.auth.getCookie('user');

  	if (!cookie) {
		this.router.navigateByUrl('/home');
  		return false;
  	}

  	const { user } = cookie;
  	const rol = user.rol;
  	return this.redirect(rol, path);
  }

  redirect(rol:string, path:string) {
  	switch (rol) {
  		case "CUSTOMER":
  			if (path !== 'profile') {
  				this.router.navigateByUrl('/profile');
  				return false;
  			}
  			return true;
  		case "ADMIN":
  			if (path !== 'admin') {
  				this.router.navigateByUrl('/admin');
  				return false;
  			}
  			return true;
  		case "SUPER MARKET":
  			if (path !== 'superMarket') {
  				this.router.navigateByUrl('/home');
  				return false;
  			}
  			return true  		
  		default:
  			this.router.navigateByUrl('/home');
  			return false;
  	}
  }
}
