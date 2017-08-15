import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  produtos: Array<Produto>

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.listar().subscribe(retorno => this.produtos = retorno)
  }

}
