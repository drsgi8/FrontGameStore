import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './Product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private productUrl = 'http://localhost:8080/product';
  private searchName = '';

  constructor(private http: Http) {}

  setName(name: string): void {
    this.searchName = name;
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get(this.productUrl.concat('?name=' + this.searchName))
      .map((res: Response) => res.json() as Product[]);
  }

}
