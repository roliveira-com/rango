import {Injectable} from '@angular/core'

import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurante-detail/shopping-cart/cart-item.model';

export class OrderService {
  constructor(private cart: ShoppingCartService ) {}

  cartItems(): CartItem[]{
    return this.cart.items
  }

  increaseQty(item: CartItem){
    this.cart.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cart.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cart.removeItem(item)
  }
}