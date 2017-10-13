import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurante-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import {RANGO_API} from '../app.api';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {
  constructor(private cart: ShoppingCartService, private api: Http ) {}

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

  itemsValue(){
    return this.cart.total();
  }

  checkout(order: Order): Observable<string>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(`${RANGO_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
      .map(response => response.json())
  }

  clear(){
    this.cart.clear();
  }

}
