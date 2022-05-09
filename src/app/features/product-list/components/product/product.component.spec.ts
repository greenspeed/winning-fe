import { ProductModalComponent } from './../product-modal/product-modal.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let debugElement: DebugElement;
  let modalServiceSpy: jasmine.SpyObj<any>;
  let productStub = {
    sku: '373284628-8',
    name: 'Wine - Red, Wolf Blass, Yellow',
    price: 205,
    rrp: 226,
    image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('NgbModal', ['open']);
    await TestBed.configureTestingModule({
      declarations: [ProductComponent, ProductModalComponent],
      providers: [{ provide: NgbModal, useValue: spy }],
    }).compileComponents();

    modalServiceSpy = TestBed.inject(NgbModal) as jasmine.SpyObj<NgbModal>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = productStub;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have image rendered', () => {
    const img = debugElement.nativeElement.querySelector('img');
    expect(img.src).toContain(
      'http://dummyimage.com/300x300.png/cc0000/ffffff'
    );
  });

  it('should have name rendered', () => {
    const figcaption = debugElement.nativeElement.querySelector('figcaption');
    expect(figcaption.textContent).toContain('Wine - Red,');
  });

  it('should have price rendered', () => {
    const price = debugElement.nativeElement.querySelector(
      '.price-container > span'
    );
    expect(price.textContent).toContain('$205');
  });

  it('should have rrp rendered', () => {
    const rrp = debugElement.nativeElement.querySelector(
      '.price-container > span:last-child'
    );
    expect(rrp.textContent).toContain('$21 off RRP of $226');
  });

  it('should have add to cart button rendered', () => {
    const button = debugElement.nativeElement.querySelector(
      '.actions-container > button'
    );
    expect(button.textContent).toContain('Add to Cart');
  });

  it('should have compare button rendered', () => {
    const button = debugElement.nativeElement.querySelector(
      '.actions-container > button:last-child'
    );
    expect(button.textContent).toContain('Compare');
  });

  it('should called modalService open method', () => {
    modalServiceSpy.open.and.returnValue({
      componentInstance: {
        fromParent: {},
      },
      result: new Promise((resolve) => {}),
    });

    expect(modalServiceSpy.open.calls.count()).toBe(0);
    component.openModal(productStub);
    expect(modalServiceSpy.open.calls.count()).toBe(1);
  });
});
