import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component'
import { RestaurantService } from './restaurantes/restaurant/restaurant.service';
import { ShoppingCartService } from './restaurante-detail/shopping-cart/shopping-cart.service';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurante-detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurante-detail/menu/menu.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component';


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
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestaurantService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
