import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	@Input() placeholder;

  constructor() { }

  ngOnInit(): void {
  	if (!this.placeholder) {
  		this.placeholder = 'search Products';
  	}
  }

}
