import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model'
import {RestaurantService} from './restaurant/restaurant.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurants: Restaurant[]

  private restaurantsService: RestaurantService;

  constructor(restaurantsService: RestaurantService) { 
    this.restaurantsService = restaurantsService;
  }

  ngOnInit() {
    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

}
