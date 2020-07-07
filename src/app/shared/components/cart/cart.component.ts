import { Component, OnInit, Input } from '@angular/core';
import { AddCartService } from '@core/addCart/add-cart.service';
import { Product } from '@core/products/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	@Input() homepage;

	public cart:Product[]=[];
  public animation:boolean = false;

  constructor(
  	private _addCartService:AddCartService
  ) { }

  ngOnInit(): void {
  	this._addCartService
		.getObservable()
		.subscribe((response:Product[]) => {
  		// console.log(response);
  		this.cart = response;
      this.animation = true;
      setTimeout(()=> this.animation=false, 800);
  	});
  }

}
