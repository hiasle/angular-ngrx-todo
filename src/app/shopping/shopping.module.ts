import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './container/content/content.component';
import { ShoppingcartDetailComponent } from './container/shoppingcart-detail/shoppingcart-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartFormComponent } from './presentational/shopping-cart-form/shopping-cart-form.component';
import { ShoppingCartListComponent } from './presentational/shopping-cart-list/shopping-cart-list.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [ContentComponent, ShoppingcartDetailComponent, ShoppingCartFormComponent, ShoppingCartListComponent],
})
export class ShoppingModule { }
