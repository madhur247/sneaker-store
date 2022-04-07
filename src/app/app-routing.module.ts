import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalWrapperComponent } from './auth/modal-wrapper/modal-wrapper.component';
import { CartComponent } from './cart/cart/cart.component';
import { FilterWrapperComponent } from './product/filter-wrapper/filter-wrapper.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'sneakers', pathMatch: 'full' },
  {
    path: 'authenticate',
    component: ModalWrapperComponent,
    outlet: 'modal',
  },
  {
    path: 'sneakers',
    children: [
      {
        path: '',
        component: ProductsComponent,
        children: [
          {
            path: 'filter',
            component: FilterWrapperComponent,
            outlet: 'bottomsheet',
          },
        ],
      },
      { path: ':id', component: ProductDetailsComponent },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: '**', redirectTo: 'sneakers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
