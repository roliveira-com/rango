import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms';
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

  orderId: string;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  paymentOpts: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Refeição', value: 'REF'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRED'},
  ]

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      // sintaxe reduzida
      // name: '',
      // sintaxe longa
      // name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      /**
       * @V6 Feature
       * configurando campo para aplicar validação somente no evento onBlur.
       * É possível plaicar no form todo com 
       * 
       */
      name: new FormControl('',{
        validators: [Validators.required, Validators.minLength(5)],
        updateOn: 'blur'
      }),
      email: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]), //sintaxe longa
      emailConfirmation: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo})
    /**
     * Customizando evednto de validação no form todo
     */
    // this.orderform = new FormGroup({
    //   email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
    //   mailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)])
    // }, { validators: [OrderComponent.equalsTo], updateOn: 'blur'})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
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

  // usando a propriedade orderId, este método
  // consegue identificar se o pedido foi completado
  // e infroma-lo para o LeaveOrderGurad em order.guard.ts
  // por exemplo
  isOrderCompleted(): boolean{
    return this.orderId !== undefined;
  }

  checkout(order: Order){
    order.orderItem = this.getItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkout(order)
      // O operador od aqui guarda o o numero do pedido
      // Assim, o método isOrderCompleted() consegue checar se
      // o usuário completou o pedido
      .do((orderId: string) => {
        this.orderId = orderId;
      })
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary'])
        console.log(`Compra realizada com sucesso. Número do pedido: ${orderId}`);
        this.orderService.clear();
      })
  }

}
