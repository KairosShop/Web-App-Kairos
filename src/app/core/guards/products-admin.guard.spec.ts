import { TestBed } from '@angular/core/testing';

import { ProductsAdminGuard } from './products-admin.guard';

describe('ProductsAdminGuard', () => {
  let guard: ProductsAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
