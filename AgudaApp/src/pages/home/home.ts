import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { HomeDataComponent } from '../../components/home-data/home-data';

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
