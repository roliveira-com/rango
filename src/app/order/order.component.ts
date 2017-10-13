import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../restaurante-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOpts: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Refeição', value: 'REF'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRED'},
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(){
    return this.orderService.itemsValue();
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

  checkout(order: Order){
    order.orderItem = this.getItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkout(order).subscribe((orderId: string) => {
      console.log(`Compra realizada com sucesso. Número do pedido: ${orderId}`);
      this.orderService.clear();
    })
  }

}
