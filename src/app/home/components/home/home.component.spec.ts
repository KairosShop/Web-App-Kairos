import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CategoriesService } from '@core/categories/categories.service';
import { ProductsService } from '@core/products/products.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class ProductsServiceStub {
  getProductsOfCategories() {
    let products = ['product'];
    return of(products);
  }

}

class CategoriesStub {
  getAllCategories() {
    let categories = [{category:'productCategory',id:1}];
    return of(categories);
  }
}
  

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: CategoriesService, useClass:CategoriesStub },
        { provide: ProductsService, useClass: ProductsServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
