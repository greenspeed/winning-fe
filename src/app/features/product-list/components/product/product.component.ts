import { ProductModalComponent } from './../product-modal/product-modal.component';
import { IProductList } from './../../models/product-list';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: IProductList;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal(product: IProductList) {
    const modalRef = this.modalService.open(ProductModalComponent, {
      scrollable: true,
      windowClass: 'modalClass',
    });

    modalRef.componentInstance.fromParent = product;
    modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {}
    );
  }
}
