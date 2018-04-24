import { HomeDataProvider } from './../../providers/home-data/home-data';
import { Component } from '@angular/core';
import { NavController, Events, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabName = 'ראשי';
  refresh_id = 'homeRef';
  title = 'ברוכים הבאים לאגודת הסטודנטים עזריאלי!';
  browserSize;

  constructor(public navCtrl: NavController, public events: Events, public postsService: HomeDataProvider, public platform: Platform) {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      this.browserSize = "desktop-card"
    }
  }

  ionViewDidLoad(){

  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName, this.refresh_id);
    this.doRefresh();
  }

  doRefresh(){
    console.log("home refresh");
    this.postsService.load();
  }
}
