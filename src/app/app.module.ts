import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { routes } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component'
import { RestaurantService } from './restaurantes/restaurant/restaurant.service';
import { ShoppingCartService } from './restaurante-detail/shopping-cart/shopping-cart.service';
import { OrderService } from './order/order.service'
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurante-detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurante-detail/menu/menu.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestauranteDetailComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    MenuComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestaurantService, ShoppingCartService, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
