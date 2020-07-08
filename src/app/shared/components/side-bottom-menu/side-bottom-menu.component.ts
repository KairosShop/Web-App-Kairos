import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '@core/categories/categories.service'
import { Category } from '@core/categories/categories.model'

@Component({
  selector: 'app-side-bottom-menu',
  templateUrl: './side-bottom-menu.component.html',
  styleUrls: ['./side-bottom-menu.component.scss']
})
export class SideBottomMenuComponent implements OnInit {

  @Input() toggle;
  public categories: Category[] = [];
  public viewCategory: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoriesService.getAllCategories().subscribe((categories: any) => {
      this.categories = categories;
    })

  }

  expandCategory(){
    this.viewCategory = !this.viewCategory;
  }
}
