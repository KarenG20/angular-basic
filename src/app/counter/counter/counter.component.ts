import { Component } from "@angular/core";
@Component({
  selector: 'app-counter',
  template: `
  
  <h1>{{ title}}</h1>
  <h3>La base es: <strong>{{base}}</strong></h3>
  <button (click)="accumulate(-base)">-{{base}}</button>
 
  
  <span> {{num}} </span>
  <button (click)=" accumulate( base)">+{{base}}</button>
  
  `
})
export class CounterComponent {
  title: string = 'Counter APP ';
  num  : number = 10;
  base : number = 5;


  accumulate(value: number) {  
      this.num += value;
  }
}