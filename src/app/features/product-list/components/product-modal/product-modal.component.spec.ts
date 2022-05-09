import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModalComponent } from './product-modal.component';

describe('ProductModalComponent', () => {
  let component: ProductModalComponent;
  let fixture: ComponentFixture<ProductModalComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductModalComponent],
      providers: [NgbModal, NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModalComponent);
    component = fixture.componentInstance;
    component.fromParent = {
      sku: '373284628-8',
      name: 'Wine - Red, Wolf Blass, Yellow',
      price: 205,
      rrp: 226,
      image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
    };
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show product name', () => {
    const rrp = debugElement.nativeElement.querySelector('.modal-body > div');
    expect(rrp.textContent).toContain(
      'Wine - Red, Wolf Blass, Yellow is added!'
    );
  });
});
