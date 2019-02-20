import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurantes/restaurant/restaurant.service'
import { MenuItem } from '../menu-item/menu-item.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private api: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.api.restaurantMenu(this.route.parent.snapshot.params['id'])
  }

  addItem(item: MenuItem){
    console.log(item)
  }

  addLogItem(item: MenuItem){
    console.log(item)
  }

}
