import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IProductList } from '../../models/product-list';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList$!: Observable<IProductList[]>;

  constructor(public productListService: ProductListService) {}

  ngOnInit(): void {
    this.productList$ = this.productListService.productList$;
  }
}
