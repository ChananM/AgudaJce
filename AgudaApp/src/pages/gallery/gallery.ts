import { Component } from '@angular/core';
import { NavController, NavParams, Events, Platform } from 'ionic-angular';
import { FbImagesPage } from './fb-images/fb-images';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  tabName = 'גלריה';
  refresh_id = 'gallRef';

  albumArray = [
    {headline: "USA", content: "51 states", imageUrl: "blablabla"},
    {headline: "Canada", content: "3 states"},
    {headline: "Israel", content: "1 states"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, public platform: Platform) {
  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName, this.refresh_id);
    this.doRefresh();
  }

  doRefresh(){
    console.log("galery refresh");
  }

  callAlbum(text){
    this.navCtrl.push(FbImagesPage, {text1: text})
  }
}
