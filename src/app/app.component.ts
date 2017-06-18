import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';
import { loadProducts } from '../scripts/disp_products.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  searchName: string;
  products: Product[];
  backendUrl = 'http://localhost:8080';
  headerBannerUrl: string;

  constructor(private service: ProductService) {
    this.headerBannerUrl  = 'assets/witcher3-banner.jpg';
  }

  updateProducts(): void {
    this.service.getProducts()
      .subscribe(list => {
        this.products = list;
        loadProducts(this.products);
      });
  }

  search(): void {
    this.service.setName(this.searchName);
    this.updateProducts();
  }

  ngOnInit(): void {
    this.updateProducts();
  }
}
