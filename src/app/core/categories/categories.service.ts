import { Injectable } from '@angular/core';
import { ApiRequestsService } from '../apiRequest/api-requests.service';

import { Category } from './categories.model';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private url = 'categories';

  constructor(private _apiRequests: ApiRequestsService) { }

  getAllCategories() {
    return this._apiRequests.getQuery(`${this.url}`);
  }
  getCategory(id: string) {
    return this._apiRequests.getQuery(`${id}`);
  }

}
