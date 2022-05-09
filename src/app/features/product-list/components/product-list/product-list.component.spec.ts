import { ProductListService } from './../../product-list.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { of } from 'rxjs/internal/observable/of';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement: DebugElement;
  let productListServiceStub: Partial<ProductListService>;
  productListServiceStub = {
    productList$: of([
      {
        sku: '373284628-8',
        name: 'Wine - Red, Wolf Blass, Yellow',
        price: 205,
        rrp: 226,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
    ]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [
        { provide: ProductListService, useValue: productListServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-product', async () => {
    const list = debugElement.queryAll(By.css('app-product'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(list.length).toBe(1);
    });
  });
});
