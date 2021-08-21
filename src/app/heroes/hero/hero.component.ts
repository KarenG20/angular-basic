import { Component } from "@angular/core";


@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent{
  name: string = 'Iron Man';
  year: number = 45
  
  // Esto es un GET
  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }
  // Esto es un metodo
  getName(): string {
    return `${this.name} - ${this.year}`;
  }

  changeName(): void{
    this.name = 'SpiderMan';

  }
  changeYear(): void {
    this.year = 38;
  }

 }