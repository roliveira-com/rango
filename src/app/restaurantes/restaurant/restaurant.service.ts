import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Restaurant} from './restaurant.model';
import {MenuItem} from '../../restaurante-detail/menu-item/menu-item.model';
import {RANGO_API} from '../../app.api';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';


@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  restaurants(search?: string): Observable<Restaurant[]>{
    // Passar parâmetros requer instanciar HttpParams
    let params: HttpParams = undefined;
    if(search){
      params = new HttpParams().set('q', search);
    }
    return this.http.get<Restaurant[]>(`${RANGO_API}/restaurants`, {params: params});
  }

  restaurantById(id: string):Observable<Restaurant>{
    // O HttpClient requer a tipagem do método
    return this.http.get<Restaurant>(`${RANGO_API}/restaurants/${id}`)
      // Ao usar HttpClient não é mais necessário mapear a
      // resposta para json() já que isto é feito automaticamente
      // .map(response => response.json())
      // .catch(ErrorHandler.handleError)

  }

  restaurantReview(id: string): Observable<any>{
    return this.http.get(`${RANGO_API}/restaurants/${id}/reviews`)
  }

  restaurantMenu(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${RANGO_API}/restaurants/${id}/menu`)
  }

}