import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsAdminGuard implements CanActivate {
  
  constructor(
  	private auth: AuthService,
  	private router: Router
  ) {}

  canActivate(path): boolean {
  	const paramsPath = path.params.id;
  	const queryParams = path.queryParams.action;
  	console.log(path);
  	const cookie = this.auth.getCookie('user');
  	if (!cookie) {
    	this.router.navigateByUrl('/login');
  		return false;
  	}
    
    const { user } = cookie;

    if (user.rol == 'ADMIN') {
    	return true;
    }
	if (queryParams === 'edit') {
    // this._router.navigate(['/products/search', this.searchString]);
		// this.router.navigate(['/admin/products','id?action=view']);
    this.router.navigateByUrl(`/admin/products/${paramsPath}?action=view`);
		return false;
	}
    return true;
  }
  
}
