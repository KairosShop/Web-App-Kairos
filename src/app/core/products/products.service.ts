import { Injectable } from '@angular/core';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url:string = 'products';

  constructor(
    private apiResquests:ApiRequestsService
  ) { }

  getAllProducts() {
    return this.apiResquests.getQuery(`${this.url}`)
  }
  getProduct(id: number) {
    return this.apiResquests.getQuery(`${this.url}/${id}`)
  }
  getProductsOfCategories(idCategory: number) {
    return this.apiResquests.getQuery(`${this.url}/?categoryId=${idCategory}`)
  }
  getProductsActiveOfCategories(idCategory: number) {
    return this.apiResquests.getQuery(`${this.url}/?categoryId=${idCategory}?active='true'`)
  }
  getProductsOfSubcategories(idsubcategory: number) {
    return this.apiResquests.getQuery(`${this.url}/?subcategoryId=${idsubcategory}`)
  }

}
