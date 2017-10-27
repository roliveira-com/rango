import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { Restaurant } from './restaurant/restaurant.model';
import {RestaurantService} from './restaurant/restaurant.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  animations: [
    trigger('toggleSearch',[
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible',style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {

  restaurants: Restaurant[];
  searchBarState = 'hidden';

  searchForm: FormGroup;
  searchInput: FormControl;

  private restaurantsService: RestaurantService;

  constructor(restaurantsService: RestaurantService, private form: FormBuilder) { 
    this.restaurantsService = restaurantsService;
  }

  ngOnInit() {

    this.searchInput = this.form.control('');
    this.searchForm = this.form.group({
      searchInput: this.searchInput
    });

    this.searchInput.valueChanges.switchMap(searchTerm => this.restaurantsService.restaurants(searchTerm))
      .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearchBar(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
