import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {OrderService} from '../order/order.service';
import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';
import {NotificationService} from './messages/notification.service';
import {LoginService} from '../login/login.service';

import {LoggedInGuard} from '../login/loggedin.guard';
import {LeaveOrderGuard} from '../order/order.guard';
import {AuthInterceptor} from '../login/auth.interceptor';

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component';
import {SnackbarComponent} from './messages/snackbar/snackbar.component'

@NgModule({
  declarations: [InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  exports: [InputComponent,RadioComponent,RatingComponent,CommonModule,FormsModule,ReactiveFormsModule,SnackbarComponent]
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
      providers: [
        OrderService,
        ShoppingCartService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
      ]
    }
  }

}