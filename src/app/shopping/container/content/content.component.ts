import { Product } from './../../../models/product';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/models/shoppingcart';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { v4 as uuidv4 } from 'uuid';

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
    sc.id = uuidv4();
    sc.name = 'First Shopping Cart';
    sc.products = [];
    sc.done = false;

    let product1 = new Product();
    product1.id = uuidv4();
    product1.name = 'Eier';
    product1.amount = 2;

    let product2 = new Product();
    product2.id = uuidv4();
    product2.name = 'Mehl';
    product2.amount = 1;

    sc.products = [product1, product2];

    this.shoppingCarts$ = of([sc]);
  }

  amountDecrement(product: Product) {
    console.log('event decrement emitted');
    if (product.amount > 0) {
      product.amount = product.amount - 1;
      let copy: ShoppingCart[] = [];
      this.shoppingCarts$.subscribe(sc => copy = sc);
      console.log('Copy: ' + JSON.stringify(copy));
      for (const sc of copy) {
        const idx = sc.products.findIndex(p => p.id === product.id);
        if (idx) {
          sc.products[idx] = product;
        }
      }
      this.shoppingCarts$ = of(copy);
    }
  }

  amountIncrement(product: Product) {
    console.log('event increment emitted');
    product.amount = product.amount + 1;
    let copy: ShoppingCart[] = [];
    this.shoppingCarts$.subscribe(sc => copy = sc);
    console.log('Copy: ' + JSON.stringify(copy));
    for (const sc of copy) {
      const idx = sc.products.findIndex(p => p.id === product.id);
      if (idx) {
        sc.products[idx] = product;
      }
    }
    this.shoppingCarts$ = of(copy);
  }

  addProduct(productName: string) {
    console.log('event product added emitted');
    const newProduct = new Product();
    newProduct.id = uuidv4();
    newProduct.amount = 0;
    newProduct.name = productName;

    let copy: ShoppingCart[] = [];
    this.shoppingCarts$.subscribe(sc => copy = sc);
    for (const sc of copy) {
      sc.products.push(newProduct);
    }
    this.shoppingCarts$ = of(copy);
  }

}
