import { Produto } from './produto.model'

import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoService {
    constructor(private api: Http){}

    listar(): Observable<Array<Produto>> {
        return this.api.get('http://localhost:3000/produtos').map(produto => produto.json())
    }
}