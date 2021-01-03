import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Product} from '../../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}


  createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + `/products`, product);
  }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL + `/products`);
  }

  editProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(API_URL + `/products/${id}`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(API_URL + `/products/${id}`);
  }
  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(API_URL + `/products/${id}`);
  }

  }
