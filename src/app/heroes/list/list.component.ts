import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent  {

  heroes: string[] = ['SpiderMan', 'IronMan', 'Thor', 'Arrow','Flash'];
  heroClear : string ='' ;
  clearHero() {
    this.heroClear = this.heroes.pop() || '';
  }
}
