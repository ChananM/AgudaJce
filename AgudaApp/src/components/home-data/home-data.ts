import { Component, Input } from '@angular/core';

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
