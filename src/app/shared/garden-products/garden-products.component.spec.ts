import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenProductsComponent } from './garden-products.component';

describe('GardenProductsComponent', () => {
  let component: GardenProductsComponent;
  let fixture: ComponentFixture<GardenProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
