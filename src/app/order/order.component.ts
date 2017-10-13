import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../restaurante-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOpts: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Refeição', value: 'REF'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRED'},
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  getItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

}
