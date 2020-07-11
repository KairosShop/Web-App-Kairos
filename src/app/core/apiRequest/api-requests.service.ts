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
  headers: HttpHeaders;

  constructor(private http: HttpClient, private auth: AuthService) {

  }

  getToken() {
    const { token } = this.auth.getCookie('user') || false;
    if (token) {
      this.headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
  }

  getQuery(query: string) {
    this.getToken()
    const headers = this.headers;
    return this.http.get(`${this.url}/${query}`, {headers})
      .pipe(map((categories: any) => {
        const { error, body, status } = categories;
        if (error) {
          new Error(`Error: status ${status} - request not made`);
        } else {
          return body;
        }
      }));
  }
}
