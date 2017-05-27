import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchName: string;
  products: Product[];
  backendUrl = 'http://localhost:8080';

  constructor(private service: ProductService) {}

  search(): void {
    this.service.setName(this.searchName);
    this.service.getProducts()
      .subscribe(list => this.products = list);
  }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(list => this.products = list);
  }
}
