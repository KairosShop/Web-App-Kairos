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
    product.count=1;
    this.cart.push(product);
  }

  removeProduct(product:Product) {
    product.count--;
  	this.cart = this.cart.filter(({id})=> {
  		return product.id !== id;
  	});
  }

  iterator(product:Product) {
    for (let productCart of this.cart) {
      if (product.id == productCart.id) {
        return true;
      }
    }
  }

  addCount(product:Product) {
    if(this.iterator(product)) {
      product.count++;
    } else {
      this.addProduct(product);
    }
    this.saveCart();
    return this.add_cart.next(this.cart);
  }

  minusCount(product:Product) {
    if(this.iterator(product) && product.count > 1) {
      product.count--;
    } else {
      this.removeProduct(product);
    }
    this.saveCart();
    return this.add_cart.next(this.cart);
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  loadCart() {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    if (getCart) {
      this.cart = getCart;
      setTimeout(()=> {console.log('hello'); this.add_cart.next(this.cart)}, 2000);
      /*console.log('hello'); 
      this.add_cart.next(this.cart);*/
    }
  }

  clearCart() {
    localStorage.clear();
    return this.add_cart.next(this.cart);
  }

}
