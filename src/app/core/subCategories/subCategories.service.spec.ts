import { TestBed } from '@angular/core/testing';

import { SubCategoriesService } from './subCategories.service';

describe('CategoriesService', () => {
  let service: SubCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
