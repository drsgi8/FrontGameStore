import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../shared/routingModule';
import { AppComponent } from './app.component';
import { ProductsList } from '../products-list/products-list.component';
import { ProductDetails } from '../product-details/product-details.component';
import { ProductService } from '../shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsList,
    ProductDetails,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [ProductService,{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
