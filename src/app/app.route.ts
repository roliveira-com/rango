import { Routes } from '@angular/router'

import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const ROUTER: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'listar', component: ListagemComponent },
    { path: 'cadastrar', component: CadastroComponent }
]