import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createProduct(){
    this.productService.createNewProduct(this.product).subscribe( () => {
      console.log('Thanh cong');
      this.product = {};
    }, () => {
      console.log('Loi');
      }
    );
  }

}
