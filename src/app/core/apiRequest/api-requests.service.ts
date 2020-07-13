import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { AuthService } from '@core/authentication/auth.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
  private url: string = `${environment.URL_API}`;
  private urlMicroservice: string = environment.URL_MICROSERVICE;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private auth: AuthService) {

  }

  getToken() {
    const { token } = this.auth.getCookie('user') || false;
    if (token) {
      this.headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      })
    } else {
      this.headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }
  }

  getQuery(query: string, method='get', body={}) {
    this.getToken()
    const headers = this.headers;
    let request;
    if (method==='get') {
       request = this.http.get(`${this.url}/${query}`, { headers });
    }
    if (method === 'post') {
      request = this.http.post(`${this.url}/${query}`, body, { headers });
    }
    if (method === 'put') {
      request = this.http.put(`${this.url}/${query}`, body, { headers });
    }
    return request
      .pipe(map((categories: any) => {
        const { error, body, status } = categories;
        if (error) {
          new Error(`Error: status ${status} - request not made`);
        } else {
          return body;
        }
      }));
  }

  postMicroservice(cart: string) {
    this.getToken()
    const headers = this.headers;
    return this.http.post(`${this.urlMicroservice}/?cart=${cart}`, '', { headers })
      .pipe(map((comparation: any) => {
        const { error, body, status } = comparation;
        if (error != 'false') {
          new Error(`Error: status ${status} - request not made`);
        } else {
          return body;
        }
      }));
  }

  postQuery(query:string, body) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}/${query}`, body, {headers})
      .pipe(map(response => {
        console.log(response);
        console.log('hello')
        return response;
      }));
  }

}
