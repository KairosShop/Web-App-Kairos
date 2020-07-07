import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '@core/products/products.model';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
	
	private defaulProduct = {
		"id": 0,
	  "title": '',
	  "quantity": 0,
	  "id_measure": 0,
	  "description": '',
	  "id_category": 0,
	  "id_subcategory": 0,
	  "url_image": '',
	  "active": 0
	}

	public cart:Product[]=[];

	public add_cart = new Subject<Product[]>();
  
  constructor() { }

  getObservable() {
  	return this.add_cart.asObservable();
  }

  addProduct(product: Product) {
  	this.cart.push(product);
  	return this.add_cart.next(this.cart);
  }

  removeProduct(product:Product) {
  	this.cart = this.cart.filter(({id})=> {
  		return product.id !== id;
  	});
  	return this.add_cart.next(this.cart);
  }

}
