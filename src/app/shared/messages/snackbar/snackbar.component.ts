import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { Observable, timer } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators'

import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility',[
      state('hidden', style({
        opacity: 0,
        bottom: 0
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px',
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string;
  snackVisibility: string = 'hidden';

  constructor(private notifyService: NotificationService) { }

  ngOnInit() {
    this.notifyService.notifier
    .pipe(
      tap(message => {
        this.message = message;
        this.snackVisibility = 'visible';
      }),
      switchMap(message => timer(2000))
    )
    .subscribe(timer=>this.snackVisibility = 'hidden');
  }

}
