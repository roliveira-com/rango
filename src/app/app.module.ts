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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
