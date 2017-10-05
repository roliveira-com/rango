import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model'
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()
  @Output() addLog = new EventEmitter()

  constructor(private cart: ShoppingCartService) { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

  logItem(){
    this.addLog.emit(this.menuItem)
  }

  adicionarItem(item: MenuItem){
    this.cart.addItem(item)
  }



}
