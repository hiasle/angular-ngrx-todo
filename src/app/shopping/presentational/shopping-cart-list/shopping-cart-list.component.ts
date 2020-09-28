import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/models/shoppingcart';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  @Input() shoppingCarts: ShoppingCart[] = [];

  constructor() { }

  ngOnInit() {
  }

}
