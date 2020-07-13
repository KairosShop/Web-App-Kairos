import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@core/categories/categories.model';
import { LayoutComponent } from '../../../layout/layout.component';
import { SideBottomMenuComponent } from '../side-bottom-menu/side-bottom-menu.component'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  @Input() iconArrow: boolean = false;

  constructor(
    private layoutComponent: LayoutComponent,
    private sideBottomMenuComponent: SideBottomMenuComponent

  ) {
  }

  ngOnInit(): void {

  }
  showSubCategories() {
    this.iconArrow = !this.iconArrow;
  }
  showMenu() {
    this.layoutComponent.viewCategories();
  }
}
