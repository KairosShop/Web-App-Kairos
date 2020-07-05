import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { SubCategory } from './subCategories.model';

@Injectable({
  providedIn: 'root'
})

export class SubCategoriesService {
  private url: string = `${environment.URL_API}/subcategories`

  constructor(private http: HttpClient) { }

  getAllSubCategoriesToCategory(id: number) {
    return this.http.get<SubCategory[]>(`${this.url}/category/${id}`);
  }
  getSubCategory(id: number) {
    return this.http.get<SubCategory>(`${this.url}/${id}`);
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
