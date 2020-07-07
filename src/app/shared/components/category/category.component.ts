import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@core/categories/categories.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  public iconArrow: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }
  showSubCategories() {
    this.iconArrow = !this.iconArrow;
  }
}
