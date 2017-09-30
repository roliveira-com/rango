import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurantes/restaurant/restaurant.service';
import { Restaurant } from '../restaurantes/restaurant/restaurant.model';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.component.html'
})
export class RestauranteDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private api: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurantData => this.restaurant = restaurantData)
  }

}
