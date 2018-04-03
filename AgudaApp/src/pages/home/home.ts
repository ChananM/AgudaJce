import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabName = 'ראשי';
  title = 'AgudaJCE';
  constructor(public navCtrl: NavController, public events: Events) {

  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName);
    this.doRefresh();
  }

  doRefresh(){
    console.log("home refresh");
  }
}
