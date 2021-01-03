import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product/product.service';
import {Product} from '../model/product';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product: Product = {};
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(  paramMap => {
    this.id = +paramMap.get('id');
    this.getProductById(this.id);
  });

  }
  // tslint:disable-next-line:typedef
  getProductById(id){
     this.productService.getProductById(id).subscribe( result => {
      this.product = result;
      console.log('thanh cong');
    }, error => {
      console.log('loi');
    });
  }
  // tslint:disable-next-line:typedef
  deleteProduct(id){
     this.productService.deleteProduct(id).subscribe( () => {
      alert('Xoa thanh cong');
      this.router.navigate(['/list-product']);

    }, error => {
      console.log('loi');
    });
  }
}
