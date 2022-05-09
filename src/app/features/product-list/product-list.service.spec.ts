import { TestBed } from '@angular/core/testing';

import { ProductListService } from './product-list.service';

describe('ProductListService', () => {
  let service: ProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product list', (done) => {
    service.getProductList().subscribe((result) => {
      expect(result.length).toBe(50);
      done();
    });
  });
});
