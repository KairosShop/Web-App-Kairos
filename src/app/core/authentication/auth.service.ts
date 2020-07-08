import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

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
        .pipe(
          map(({body}:any)=> {
            return body.filter((index:any) => index.email == user.email)[0];
          })
        );
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

  setCookie(name, value, days) {
    value = JSON.stringify(value);
    let expires = "";
      if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax;";
  };

  getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return JSON.parse(c.substring(nameEQ.length, c.length));
    }
    return null;
  };
}
