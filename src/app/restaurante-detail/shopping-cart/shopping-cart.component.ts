import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(){
    return this.shoppingCartService.items
  }

  total(){
    return this.shoppingCartService.total()
  }

}
