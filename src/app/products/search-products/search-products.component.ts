import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@core/products/products.model';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit {

	public products:Product[];
	public query: string;

  constructor(
  	private _route:ActivatedRoute,
  	private _apiService: ApiRequestsService
  ) { }

  ngOnInit(): void {
  	this._route.params.subscribe(params => {
  		let query = params['query'];
  		this.query = query;
  		
  		this._apiService.getQuery('products?q='+query).subscribe(
  			response => {
  				this.products = response;
  		})
  	})
  }

}
