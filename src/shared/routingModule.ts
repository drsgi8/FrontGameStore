import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsList } from '../products-list/products-list.component';
import { ProductDetails } from '../product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list/',
    pathMatch: 'full'
  },
  {
    path: 'list/:searchname',
    component: ProductsList
  },
  {
    path: 'details/:id',
    component: ProductDetails
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {}
