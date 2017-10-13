import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  
  input: any
  
  @Input() label: string
  @Input() errorMessage: string

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Precisa ser usado com uma diretiva')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
