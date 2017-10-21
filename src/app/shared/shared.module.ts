import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {OrderService} from '../order/order.service';
import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

@NgModule({
  declarations: [InputComponent,RadioComponent,RatingComponent],
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  exports: [InputComponent,RadioComponent,RatingComponent,CommonModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule{
  
  // Com o ModuleWithProviders, declaramos um método estático que define
  // a opção de carregar este módulo sem a lista de providers. Assim
  // no modulo principal do app podemos simplemteste inserir SharedModule.forRoot()
  // na lista de imports para que a lista de providers tambem seja carregada
  // eliminando a necessidade de carregar o ServiceModule no moódulo principal do app
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [OrderService,ShoppingCartService]
    }
  }

}