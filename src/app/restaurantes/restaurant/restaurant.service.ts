import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Restaurant} from './restaurant.model';
import {MenuItem} from '../../restaurante-detail/menu-item/menu-item.model';
import {RANGO_API} from '../../app.api';
import {Observable} from 'rxjs/Observable';
import {ErrorHandler} from '../../app.error-handler'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RestaurantService {

  constructor(private http: Http){

  }

  restaurants(): Observable<Restaurant[]>{
    return this.http.get(`${RANGO_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string):Observable<Restaurant>{
    return this.http.get(`${RANGO_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  }

  restaurantReview(id: string): Observable<any>{
    return this.http.get(`${RANGO_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantMenu(id: string): Observable<MenuItem[]> {
    return this.http.get(`${RANGO_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}