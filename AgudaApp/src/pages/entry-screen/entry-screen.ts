import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { HomeStoryProvider } from '../../providers/home-story/home-story';

@IonicPage()
@Component({
  selector: 'page-entry-screen',
  templateUrl: 'entry-screen.html',
})
export class EntryScreenPage {

  constructor(public navCtrl: NavController, public platform: Platform, private hs: HomeStoryProvider) {
    let interval = setInterval(() => {
      if(hs.posts.length > 0){
        navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward', duration: 1250});
        clearInterval(interval);
      }
    }, 2500);
  }

  ionViewDidLoad() {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      document.getElementById('enter').setAttribute('width', '25%');
      document.getElementById('overlay').style.left = "48%";
    }
    else{
      document.getElementById('enter').setAttribute('width', '100%');
      document.getElementById('overlay').style.left = "45%";
    }
  }

}
