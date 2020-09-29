import { Product } from './../../../models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCart } from '@app/models/shoppingcart';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  @Input() shoppingCarts: ShoppingCart[] = [];

  @Output() amountIncrement = new EventEmitter();
  @Output() amountDecrement = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrement(product: Product): void {
    console.log(JSON.stringify(product) + ' amount decremented!');
    this.amountDecrement.emit(product);
  }

  increment(product: Product): void {
    console.log(JSON.stringify(product) + ' amount incremented!');
    this.amountIncrement.emit(product);
  }

}
