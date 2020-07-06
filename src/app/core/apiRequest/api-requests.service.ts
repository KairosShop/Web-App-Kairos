import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
	  private url: string = `${environment.URL_API}`


  constructor(private http: HttpClient) { }

  getQuery(query:string) {
    return this.http.get(`${this.url}/${query}`)
      .pipe(map((categories:any) => {
        const { error, body, status } = categories;
        if (error) {
          return console.error(`Error: status ${status} - request not made`)
        } else {
          return body;
        }
      }));
  }
}
