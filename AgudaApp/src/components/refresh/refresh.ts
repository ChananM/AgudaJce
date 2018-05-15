import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'refresh',
  templateUrl: 'refresh.html'
})
export class RefreshComponent {

  tab: string;
  ref_id: string;
  
  constructor(private events: Events) {
    this.events.subscribe('tab', (tab, refresh) => {
      this.tab = tab;
      this.ref_id = refresh;
    });   
  }

  
  doRefresh(){
    document.getElementById(this.ref_id).getElementsByClassName('fa-sync').item(0).classList.add('fa-spin');

    console.log('clicked');

    setTimeout(function(){
      document.getElementsByClassName('fa-spin').item(0).classList.remove('fa-spin');
    },1000);
  }
}
