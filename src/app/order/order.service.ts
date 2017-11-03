import {Injectable} from '@angular/core';

// Por já trabalhar com o Content-Type json, não será
// necessário importar Headers e RequestOptions no HttpClient
// import {Http, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http'

import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurante-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import {RANGO_API} from '../app.api';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class OrderService {
  constructor(private cart: ShoppingCartService, private api: HttpClient) {}

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
    return this.api.post<Order>(`${RANGO_API}/orders`, order)
      .map(order => order.id)
  }

  clear(){
    this.cart.clear();
  }

}
