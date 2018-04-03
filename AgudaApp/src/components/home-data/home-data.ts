import { Component, Input } from '@angular/core';

/**
 * Generated class for the HomeDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-data',
  templateUrl: 'home-data.html'
})
export class HomeDataComponent {

  @Input() headline: string;
  @Input() content: string;

  constructor() {
  }

  ngOnInit(){
    
  }

  ngOnChange(data){

  }

}
