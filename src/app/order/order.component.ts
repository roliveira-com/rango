import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../restaurante-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  delivery: number = 8;

  paymentOpts: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Refeição', value: 'REF'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRED'},
  ]

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: '', //sintaxe reduzida
      email: this.formBuilder.control(''), //sintaxe longa
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    })
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
      this.router.navigate(['/order-summary'])
      console.log(`Compra realizada com sucesso. Número do pedido: ${orderId}`);
      this.orderService.clear();
    })
  }

}
