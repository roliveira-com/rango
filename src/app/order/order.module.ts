import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component';
import {OrderItemsComponent} from './order-items/order-items.component';
import {OrderComponent} from './order.component';

import {LeaveOrderGuard} from './order.guard';

const ROUTES: Routes = [
  {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
  declarations: [DeliveryCostsComponent,OrderItemsComponent,OrderComponent],
  imports: [SharedModule,RouterModule.forChild(ROUTES)]
})
export class OrderModule {

}