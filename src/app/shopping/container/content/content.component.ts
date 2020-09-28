import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product';
import { ShoppingCart } from '@app/models/shoppingcart';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  shoppingCarts$: Observable<ShoppingCart[]>;

  constructor() { }

  ngOnInit() {
    let sc = new ShoppingCart();
    sc.id = '1';
    sc.name = 'First Shopping Cart';
    sc.products = [];
    sc.done = false;

    let product1 = new Product();
    product1.name = 'Eier';
    product1.amount = 2;

    let product2 = new Product();
    product2.name = 'Mehl';
    product2.amount = 1;

    sc.products = [product1, product2];

    this.shoppingCarts$ = of([sc]);
  }

}
