import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { Category } from './categories.model';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  private url: string = `${environment.URL_API}/categories`

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(this.url);
  }
  getCategory(id: string) {
    return this.http.get<Category>(`${this.url}/${id}`);
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
