import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '@core/products/products.service';
import { Product } from '@core/products/products.model';
import { CategoriesService } from '@core/categories/categories.service';
import { Category } from '@core/categories/categories.model';
import { SubCategory } from '@core/subCategories/subCategories.model';
import { Measure } from '@core/measure/measure.model';
import { MeasureService } from '@core/measure/measure.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from 'angularfire2/storage';
import { ValidationsService } from '@core/authentication/validations.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})

export class ProductsDetailComponent implements OnInit {
  id: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  picture: any;
  public categories: Category[];
  public subcategories: SubCategory[];
  public mesuares: Measure[];
  public productsForm: FormGroup;
  public desactive: boolean = true;
  public rol: string = 'SUPER'
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private measureService: MeasureService,
    private firebaseStorage: AngularFireStorage,
    public _validations:ValidationsService
  ) {
    this.activatedRoute.queryParams.subscribe((query) => {
      if (query.action == 'edit') {
        this.desactive = false;
      }
    })

    this.createForm();
  }

  ngOnInit(): void {
    this.fetchCategories()
    this.fetchMeasure()
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getId(this.id)
    })
  }

  getId(id: any) {
    if (id !== 'new') {
      this.fetchProduct(this.id);
    } else if (id == undefined) {
      this.createForm();
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
        url: '',
        measureId: 0,
        quantity: 0,
        categoryId: 0,
        subcategoryId: 0,
        status: true
      };
    }

    this.productsForm =
      this.formBuilder.group({
        title: [{
          value: product.title,
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(3)]],
        description: [{
          value: product.description,
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(20)]],
        urlImage: [{
          value: product.urlImage,
          disabled: this.desactive,
        }],
        url: [{
          value: null,
          disabled: this.desactive,
        }, Validators.required],
        measureId: [{
          value: product.measureId,
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(1)]],
        quantity: [{
          value: product.quantity,
          disabled: this.desactive,
        }, Validators.required],
        categoryId: [{
          value: product.categoryId,
          disabled: this.desactive,
        }, [Validators.required, Validators.minLength(2)]],
        subcategoryId: [{
          value: product.subcategoryId,
          disabled: this.desactive,
        }],
        status: [{
          value: product.active,
          disabled: this.desactive,
        }, Validators.required]
      })
  }

  getSubcategories(idCategory: number) {
    this.categories.map((item) => {
      if (item.id === idCategory) {
        this.subcategories = item.subcategories
      }
    })
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }


  saveSettings() {

    console.log(this.productsForm);
    if (this.productsForm.invalid) {
        Object.values(this.productsForm.controls).map(control => {
          if (control.status === "INVALID") {
            control.markAsTouched();
          }
        });
        return;
      }

    if (this.croppedImage) {
      const currentproductsId = Date.now();
      const products = this.firebaseStorage.ref('products/' + currentproductsId + '.jpg').putString(this.croppedImage, 'data_url');
      products.then((result) => {
        this.picture = this.firebaseStorage.ref('products/' + currentproductsId + '.jpg').getDownloadURL();
        console.log(result)
        console.log(this.picture)
      }).catch((error) => {
        alert('Hubo un error');
        console.log(error);
      });
    }

    console.log(this.productsForm.invalid);

  }
}
