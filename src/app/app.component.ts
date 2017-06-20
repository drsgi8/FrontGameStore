import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';

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

  constructor(
    private service: ProductService,
    private router: Router) {
    this.headerBannerUrl  = 'assets/witcher3-banner.jpg';
  }

  updateProducts(): void {
    this.service.getProducts()
      .subscribe(list => {
        this.products = list;
      });
  }

  search(): void {
    this.service.setName(this.searchName);
    this.updateProducts();
    this.router.navigate(['/list', this.searchName]);
  }

  ngOnInit(): void {
    this.updateProducts();
  }
}
