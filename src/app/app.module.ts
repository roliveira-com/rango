import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { RouterModule } from '@angular/router';
import { ROUTER } from './app.route';
import { HttpModule } from '@angular/http';
import { ProdutoService } from './listagem/produto.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
