import { Injectable } from '@angular/core';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'users';

  constructor(
    private apiResquests:ApiRequestsService
  ) { }

  getAllUsers() {
    return this.apiResquests.getQuery(`${this.url}`)
  }
  getUser(id: number) {
    return this.apiResquests.getQuery(`${this.url}/${id}`)
  }
  
}
