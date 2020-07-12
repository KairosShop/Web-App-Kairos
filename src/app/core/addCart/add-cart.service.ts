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

  iterator(product: Product, plus:boolean) {
    for (let productCart of this.cart) {
      if (product.id == productCart.id) {

        if (plus) {
          productCart.count++;
          return true;
        }
        return productCart.count > 1 ? productCart.count-- : false;
      }
    }
    return false;
  }

  addCount(product: Product) {
    if (this.iterator(product, true)) {
    } else {
      this.addProduct(product);
    }
    this.saveCart();
    return this.add_cart.next(this.cart);
  }

  minusCount(product:Product) {
    if(this.iterator(product, false)) {
    } else {
      this.removeProduct(product);
    }
    this.saveCart();
    return this.add_cart.next(this.cart);
  }

  saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  loadCart() {
    const getCart = JSON.parse(sessionStorage.getItem('cart'));
    if (getCart) {
      this.cart = getCart;
      setTimeout(() => {
        console.log('hello');
        this.add_cart.next(this.cart)
      }, 1500);
    }
  }

  clearCart() {
    localStorage.clear();
    return this.add_cart.next(this.cart);
  }

  getCart():Product[] {
    return this.cart;
  }

  sendCart(cart) {
    const sendCart = cart.map(products => {
      return {'productId':products.id, 'quantity': products.count}
    });
    return sendCart;
    // return this.apiResquests.getQuery('cart', 'post', cart);
  }

}
