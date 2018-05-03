import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-image-slides',
  templateUrl: 'image-slides.html',
})
export class ImageSlidesPage {

  images: Array<string>
  index: number

  //  @ViewChildren(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = this.navParams.get('imageUrl')
    this.index = this.navParams.get('index')
    // this.slides.slideTo(this.index, 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageSlidesPage');
  }

}
