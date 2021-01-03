import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product/product.service';
import {Product} from '../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = {};
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute
              ) {
    this.activatedRoute.paramMap.subscribe( async paramMap => {
      this.id = +paramMap.get('id');
      this.getProductById(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:align typedef
  editProduct(id: number){
    return this.productService.editProduct(id, this.product).subscribe( () => {
      alert('Sua thanh cong');
    }, error => {
      console.log('Loi');
    });
  }
  // tslint:disable-next-line:typedef
  getProductByPromise(id) {
    return this.productService.getProductById(id).toPromise();
  }
  // tslint:disable-next-line:typedef
  getProductById(id: number) {
    return this.productService.getProductById(id).subscribe(result => {
      this.product = result;
    });
  }

}
