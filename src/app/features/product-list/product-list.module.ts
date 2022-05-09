import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './components/product-modal/product-modal.component';

const productListRoute: Routes = [
  {
    path: 'product-list',
    children: [{ path: '', component: ProductListComponent }],
  },
];

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductModalComponent],
  imports: [CommonModule, NgbModule, RouterModule.forChild(productListRoute)],
  exports: [ProductListComponent],
  entryComponents: [ProductModalComponent],
})
export class ProductListModule {}
