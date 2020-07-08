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

  register({firstName, lastname, email, password, adress=''}, type) {
  	// This code will be repalce for method post to register user
    let user;
    let rol = type ? 'super market' : 'customer';
    let _user = {
      email,
      firstName,
      rol: rol,
      password
    }
    if (type) {
      user = {
        ..._user,
        adress: adress
      }
    } else {
      user = {
        ..._user,
        lastName: lastname
      }
    }
    console.log(user);
  	return this.http.post('https://staging.kairosshop.xyz/api/users', user);
  }
}
