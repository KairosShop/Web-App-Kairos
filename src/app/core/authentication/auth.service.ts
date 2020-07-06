import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	private http: HttpClient
  ) { }

  login(user) {
  	// This code will be repalce for method post to login user
  	return this.http.get('https://staging.kairosshop.xyz/api/users')
  }
}
