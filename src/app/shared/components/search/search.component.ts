import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	@Input() placeholder;
  public searchString: string;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  	if (!this.placeholder) {
  		this.placeholder = 'search Products';
  	}
  }

  searchProducts() {
    this._router.navigate(['/products/search', this.searchString]);
    this.searchString='';
  }

}
