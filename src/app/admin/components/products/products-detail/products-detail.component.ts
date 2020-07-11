import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '@core/products/products.service';
import { Product } from '@core/products/products.model';
import { CategoriesService } from '@core/categories/categories.service';
import { Category } from '@core/categories/categories.model';
import { SubCategory } from '@core/subCategories/subCategories.model';
import { Measure } from '@core/measure/measure.model';
import { MeasureService } from '@core/measure/measure.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})

export class ProductsDetailComponent implements OnInit {
  id: any;
  public categories: Category[];
  public subcategories: SubCategory[];
  public mesuares: Measure[];
  public productsForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private measureService: MeasureService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.fetchCategories()
    this.fetchMeasure()
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getId(this.id)
    })
  }

  getId(id: any) {
    if (id !== 'new' || id !== undefined) {
      this.fetchProduct(this.id);
    } else {
      this.createForm();
    }
  }

  fetchProduct(id: number) {
    this.productsService.getProduct(id).subscribe((product: Product) => {
      this.createForm(product);
    })
  }

  fetchMeasure() {
    this.measureService.getAllMeasures().subscribe((measures: Measure[]) => {
      this.mesuares = measures
    })
  }
  fetchCategories() {
    this.categoriesService.getAllCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      this.categories.map((item) => {
        if (item.id === this.productsForm.controls.categoryId.value) {
          this.subcategories = item.subcategories
        }
      })
    })
  }

  createForm(product?: any) {
    if (!product) {
      product = {
        title: '',
        description: '',
        urlImage: '',
        measureId: 0,
        quantity: 0,
        categoryId: 0,
        subcategoryId: 0,
        status: true
      };
    }
    
    this.productsForm = this.formBuilder.group({
      title: [product.title],
      description: [product.description],
      urlImage: [product.urlImage],
      measureId: [product.measureId],
      quantity: [product.quantity],
      categoryId: [product.categoryId],
      subcategoryId: [product.subcategoryId],
      status: [product.active]
    })
  }

  getSubcategories(idCategory: number) {
    this.categories.map((item) => {
      if (item.id === idCategory) {
        this.subcategories = item.subcategories
      }
    })
  }

}
