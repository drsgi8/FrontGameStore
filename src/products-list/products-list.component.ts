import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../shared/Product';
import { ProductService } from '../shared/product.service';
import { loadProducts } from '../scripts/disp_products.js';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsList implements OnInit {

  productsList: Product[];
  searchName: string;
  backendUrl = 'http://localhost:8080';

  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute) {}

  updateProducts(): void {
    this.service.getProducts()
      .subscribe(list => {
        this.productsList = list;
      });
      if(this.productsList)
      loadProducts(this.productsList);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchName = params['searchname'];
      this.updateProducts();
    })
  }
}
