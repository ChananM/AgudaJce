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
    {headline: "USA", 
     content: "3", 
     imageUrl: ["https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ5OuPIS8LJkCmfAr-zPV_Q4Z2KD_DACAI7bvs0RzfBe_iQZf", 
                "https://www.hayadan.org.il/images/content3/2010/05/Drinking_water_wikipedia.jpg"]},
    {headline: "Canada", 
     content: "3 states", 
     imageUrl: ["https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ5OuPIS8LJkCmfAr-zPV_Q4Z2KD_DACAI7bvs0RzfBe_iQZf", 
                "https://www.hayadan.org.il/images/content3/2010/05/Drinking_water_wikipedia.jpg"]},
    {headline: "Israel", 
     content: "1 states", 
     imageUrl: ["https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ5OuPIS8LJkCmfAr-zPV_Q4Z2KD_DACAI7bvs0RzfBe_iQZf", 
                "https://www.hayadan.org.il/images/content3/2010/05/Drinking_water_wikipedia.jpg"]},
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
