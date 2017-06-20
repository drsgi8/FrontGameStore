import { Component } from '@angular/core';
import { Product } from '../shared/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetails {
  product: Product;
}
