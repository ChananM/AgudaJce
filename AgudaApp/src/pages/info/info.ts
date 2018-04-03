import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'info.html'
})
export class InfoPage {

  tabName = 'מידע';
  constructor(public navCtrl: NavController, private events: Events) {

  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName);
    this.doRefresh();
  }

  doRefresh(){
    console.log("info refresh");
  }
}
