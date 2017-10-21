import {NgModule} from '@angular/core';

import {OrderService} from '../order/order.service';
import {ShoppingCartService} from '../restaurante-detail/shopping-cart/shopping-cart.service';

@NgModule({
  providers: [OrderService, ShoppingCartService]
})
export class ServiceModule {}