import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, LOCALE_ID } from '@angular/core';
// O Módulo HttpClient Substitui o antigo módulo Http.
// Além do nome deste método tambem muda o diretório onde ele se encontra
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
// Modificando estratégia de navegação usando Hash. Como o AngularJs
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { routes } from './app.routes';
import { RestaurantService } from './restaurantes/restaurant/restaurant.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component'
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurante-detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurante-detail/menu/menu.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

import {SharedModule} from './shared/shared.module';
import {ServiceModule} from './core/services.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './header/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestauranteDetailComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    MenuComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Se optar em listar o SharedModule.forRoot()
    // importaremos tambem a lista de providers/serviços desta
    // aplicacão que que estamos usando o ModuleWithProviders
    // no SharedModule. Deste modo não é necessário importar o
    // ServiceModule, já que já listamos estes providers po lá
    SharedModule.forRoot(),
    // ServiceModule,
    HttpClientModule,
    // Usando um Preload em modulos que usam o LazyLoad, Isso fa com
    // que o modulo LazyLoad seja carregado depois no modulo principal e
    // não apenas quando solicitado
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  // Aqui, apenas o Serviço de restaurantes está declarado no provider
  // os outros dois estão encapsulados no core modulo ServiceModule
  providers: [RestaurantService, {provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  // o uso de {provide: LocationStrategy, useClass: HashLocationStrategy} faz com que o
  // hash (#) seja adicionando na url. Ex. http://localhost/#/etc. Isso resolve problemas
  // de rota em servidores onde não é possível configurar as regras espeíficas descritas em:
  // https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml
  bootstrap: [AppComponent]
})
export class AppModule { }
