import { HomeDataProvider } from './../../providers/home-data/home-data';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabName = 'ראשי';
  refresh_id = 'homeRef';
  title = 'ברוכים הבאים לאגודת הסטודנטים עזריאלי!';

  constructor(public navCtrl: NavController, public events: Events, public postsService: HomeDataProvider) {
  }

  ionViewDidLoad(){
    this.postsService.load();
  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName, this.refresh_id);
    this.doRefresh();
  }

  doRefresh(){
    console.log("home refresh");
  }
}
