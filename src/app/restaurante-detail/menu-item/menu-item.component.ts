import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { MenuItem } from './menu-item.model'
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemIn',[
      state('ready', style({opacity:1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

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
