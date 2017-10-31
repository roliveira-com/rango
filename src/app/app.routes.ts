import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {RestauranteDetailComponent} from './restaurante-detail/restaurante-detail.component';
import {MenuComponent} from './restaurante-detail/menu/menu.component';
import {ReviewsComponent} from './restaurante-detail/reviews/reviews.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component'

export const routes: Routes = [
  //usando caregamento tardio
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'login', component: LoginComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'restaurantes/:id', component: RestauranteDetailComponent, 
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
  ]},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: '**', component: NotFoundComponent},
]