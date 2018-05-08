import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-fb-images',
  templateUrl: 'fb-images.html',
})
export class FbImagesPage {

  headline: string 
  content: string 
  imageUrl: string[]
  photos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.headline = navParams.get('headline')
    this.content = navParams.get('content')
    this.imageUrl = navParams.get('imageUrl')

    this.imageUrl.forEach((link) => {
      this.photos.push({url: link});
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbImagesPage');
  }

  callImage(index) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos,
      initialSlide: index,
      closeIcon: "close"
    });
    modal.present();
  }

}
