import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	public iconArrow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
