import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurantes/restaurant/restaurant.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private api: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.api.restaurantReview(this.route.parent.snapshot.params['id'])
  }

}
