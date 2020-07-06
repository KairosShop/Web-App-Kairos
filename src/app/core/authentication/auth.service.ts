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
  	return this.http.get('https://staging.kairosshop.xyz/api/users');
  }

  register({firstName, lastName, email, password}) {
  	// This code will be repalce for method post to register user
    //console.log(user);
    const user = {
      email,
      firstName,
      lastName,
      rol: 'customer',
      password
    }
    console.log(user);
  	return this.http.post('https://staging.kairosshop.xyz/api/users', user);
  }
}
