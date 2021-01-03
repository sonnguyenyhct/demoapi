import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';

const routers: Routes = [
  { path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent
  },
  {
    path: 'delete-product/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
