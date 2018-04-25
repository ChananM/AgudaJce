import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName, this.refresh_id);
    this.doRefresh();
  }

  doRefresh(){
    console.log("galery refresh");
  }

  callAlbum(text){
    alert(text);
  }
}
