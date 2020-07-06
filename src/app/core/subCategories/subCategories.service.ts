import { Injectable } from '@angular/core';
import { ApiRequestsService } from '../apiRequest/api-requests.service';
import { SubCategory } from './subCategories.model';

@Injectable({
  providedIn: 'root'
})

export class SubCategoriesService {

  private url:string = 'subcategories';
  constructor(private _apiRequests: ApiRequestsService) { }

  getAllSubCategoriesToCategory(id: number) {
    return this._apiRequests.getQuery(`${this.url}/category/${id}`);
  }
  getSubCategory(id: number) {
    return this._apiRequests.getQuery(`${this.url}/${id}`);
  }

/*   createSubCategory(object: SubCategory) {
    return this.http.post(`${this.url}`, object);
  }

  updateSubCategory(id: string, changes: Partial<SubCategory>) {
    return this.http.put(`${this.url}/${id}`, changes);
  }

  deleteSubCategory(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  } */

}
