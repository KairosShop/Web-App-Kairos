import { Injectable } from '@angular/core';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';
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

}
