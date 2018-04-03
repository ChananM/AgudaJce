import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  tabName = 'גלריה';

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName);
    this.doRefresh();
  }

  doRefresh(){
    console.log("galery refresh");
  }
}
