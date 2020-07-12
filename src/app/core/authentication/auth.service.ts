import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user) {
    const userCredentials = user.username + ':' + user.password;
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(userCredentials)
    });

    return this.http.post('https://staging.kairosshop.xyz/api/auth/sign-in', {
      "email": user.username,
      "password": user.password
    }, { headers });


  }

  register({ firstName, lastname, email, password, adress = '' }, type) {
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
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return JSON.parse(c.substring(nameEQ.length, c.length));
    }
    return null;
  };

  delteCokie(name) {
    this.setCookie(name, '', -1);
  }

  redirectUser(rol: string) {
    let link;

    switch (rol) {
      case "CUSTOMER":
        link = '/home';
        break;

      case "SUPER MARKET":
        link = '/home';
        break;

      case "ADMIN":
        link = '/admin';
        break;
    }

    this.router.navigateByUrl(link);
  }

  isCustomer():boolean {
    const cookie = this.getCookie('user');
    if (!(cookie)) {
      return false;
    }

    console.log(cookie.user.rol)

    if (cookie.user.rol !='CUSTOMER') {
      return false;
    }

    console.log(cookie.user.rol)
    return true;
  }

}
