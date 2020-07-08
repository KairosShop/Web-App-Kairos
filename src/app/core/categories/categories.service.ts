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

/*   createCategory(object: Category) {
    return this.http.post(`${this.url}`, object);
  }

  updateCategory(id: string, changes: Partial<Category>) {
    return this.http.put(`${this.url}/${id}`, changes);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  } */

}
