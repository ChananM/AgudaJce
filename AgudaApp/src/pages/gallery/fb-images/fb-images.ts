import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImageSlidesPage } from '../image-slides/image-slides';

@Component({
  selector: 'page-fb-images',
  templateUrl: 'fb-images.html',
})
export class FbImagesPage {

  headline: string 
  content: string 
  imageUrl: Array<string>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.headline = navParams.get('headline')
    this.content = navParams.get('content')
    this.imageUrl = navParams.get('imageUrl')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbImagesPage');
  }

  callImage(index) {
    this.navCtrl.push(ImageSlidesPage, {index: index})
    
  }

}
