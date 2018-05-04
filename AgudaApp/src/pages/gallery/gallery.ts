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
    {headline: "Wallpapers", 
     content: "6", 
     imageUrl: ["https://wallpaperbrowse.com/media/images/303836.jpg", 
                "https://wallpaperbrowse.com/media/images/pexels-photo.jpg",
                "https://wallpapercave.com/wp/mgQSn9p.jpg",
                "https://wallpaperbrowse.com/media/images/b807c2282ab0a491bd5c5c1051c6d312_rP0kQjJ.jpg", 
                "https://wallpaperbrowse.com/media/images/general-night-golden-gate-bridge-hd-wallpapers-golden-gate-bridge-wallpaper.jpg",
                "https://wallpaperbrowse.com/media/images/eiffel-tower-wallpaper-18_fRZLW4V.jpg"]},
    {headline: "Galaxy", 
     content: "3", 
     imageUrl: ["https://wallpaperbrowse.com/media/images/galaxy-wallpaper-29.jpg",
                "https://wallpaperbrowse.com/media/images/galaxy-wallpaper-30.jpg", 
                "https://wallpaperbrowse.com/media/images/7D42mV5.jpg"]},
    {headline: "Nature", 
     content: "4", 
     imageUrl: ["https://wallpaperbrowse.com/media/images/lake_mountain_scenery_11495.jpg",
                "https://wallpaperbrowse.com/media/images/RDIqwj.jpg", 
                "https://wallpaperbrowse.com/media/images/234a218c200ea9a5fc85bc9363cf2f2e.jpg",
                "https://wallpaperbrowse.com/media/images/HD-Scenery-Wallpapers-1.jpg"]},
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

  callAlbum(headline, content, imageUrl){
    this.navCtrl.push(FbImagesPage, {headline: headline, content: content, imageUrl: imageUrl})
  }
}
