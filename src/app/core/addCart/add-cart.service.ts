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
  
  constructor() {
    this.loadCart();
  }

  getObservable() {
  	return this.add_cart.asObservable();
  }

  addProduct(product: Product) {
  	this.cart.push(product);
    this.saveCart()
  	return this.add_cart.next(this.cart);
  }

  removeProduct(product:Product) {
  	this.cart = this.cart.filter(({id})=> {
  		return product.id !== id;
  	});
    this.saveCart()
  	return this.add_cart.next(this.cart);
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  loadCart() {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    if (getCart) {
      this.cart = getCart;
      setTimeout(()=> this.add_cart.next(this.cart), 0);
    }
  }

  clearCart() {
    localStorage.clear();
    return this.add_cart.next(this.cart);
  }

}
