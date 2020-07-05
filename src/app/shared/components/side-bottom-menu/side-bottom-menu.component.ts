import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '@core/categories/categories.service'
import { Category } from '@core/categories/categories.model'
import { SubCategory } from '@core/subCategories/subCategories.model'
import { SubCategoriesService } from '@core/subCategories/subCategories.service';

@Component({
  selector: 'app-side-bottom-menu',
  templateUrl: './side-bottom-menu.component.html',
  styleUrls: ['./side-bottom-menu.component.scss']
})
export class SideBottomMenuComponent implements OnInit {

  @Input() toggle;
  public categories: Category[] = [];
  public subCategories: SubCategory[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private subCategoriesService: SubCategoriesService
  ) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoriesService.getAllCategories().subscribe((categories: any) => {
      const { error, body, status } = categories
      if (error) {
        return console.error(`Error: status ${status} - request not made`)
      }
      this.categories = body;
      this.categories.map((item) => {
        this.subCategoriesService.getAllSubCategoriesToCategory(item.id)
          .subscribe((subcategoies: any) => {
            const { error, body, status } = subcategoies
            if (error) {
              return console.error(`Error: status ${status} - request not made`)
            }
            item.subCategories = body;
          })
      })
    })

  }

}
