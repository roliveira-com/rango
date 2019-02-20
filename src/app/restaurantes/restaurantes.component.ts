import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { Restaurant } from './restaurant/restaurant.model';
import {RestaurantService} from './restaurant/restaurant.service';

import { Observable, from } from 'rxjs';
import { tap, switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { NgPluralCase } from '@angular/common';

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

    this.searchInput.valueChanges
      // Desde o Angular 5, os operadores passaram a ser funções puras, o que facilita
      // a criação de operadore customizados além de gerarem bundles menos. Assim, os
      // operadoes devem ser encadeado dentro do operador pipe()
      .pipe(
        // O operador rxjs debounceTime() se certifica que eventos com intervalos
        // maiores que o tempo espcificado entre um e o outro não sejam considerados.
        // Neste caso, é possível evitar multiplos requests ao servidor a cada letra digitada
        debounceTime(500),
        // Já o operador distinctUntilChanged() desconsidera se o valor digitado
        // for o mesmo que o anterior. Neste caso, é possível evitar requests
        // ao servidor caso o termo digitado for igual ao da busca anterior
        distinctUntilChanged(),
        // O uso do catchError() em restaurants() evita que um eventual erro disparado pelo servidor
        // na chamada http quebre o observable(). Desta forma, tratamos o erro para que,
        // ao invés do erro em si, ele retorne um array vazio.
        switchMap(searchTerm => this.restaurantsService.restaurants(searchTerm)
          .pipe(
            catchError(error => from([]))
          )
        )
      ).subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearchBar(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
