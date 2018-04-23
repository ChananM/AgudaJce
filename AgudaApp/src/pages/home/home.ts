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

  constructor(public navCtrl: NavController, public events: Events, public postsService: HomeDataProvider, public platform: Platform) {
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

  adjustSizes(){  
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      console.log("Trying to change element size");
      var cards = document.getElementsByTagName('ion-card');
      for(var i=0; i<cards.length; i++){
        cards[i].setAttribute('class', cards[i].getAttribute('class') + ' resizeableCard');
      }
    }
  }
}
