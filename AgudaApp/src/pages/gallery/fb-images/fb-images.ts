import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { Photo, Photos } from '../../../models/interfaces';
import { FacebookProvider } from '../../../providers/facebook/facebook';

@Component({
  selector: 'page-fb-images',
  templateUrl: 'fb-images.html',
})
export class FbImagesPage {

  allowed: boolean = false; 
  imageUrls: Photos
  photos: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController,
              public fbProv: FacebookProvider,
              public loadingCtrl: LoadingController) {

                let album = navParams.get('album');
                let loader = this.loadingCtrl.create();
                loader.present();
                this.fbProv.getphotos(album.id).then(res =>{
                  this.imageUrls = res;
                  this.getPhotosUrl(this.imageUrls.data, this.photos);
                  this.allowed = true;
                  loader.dismiss()
                  console.log(this.photos); 
                  
                }).catch(err => {
                  console.log(err);
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

  nextPart() {
    this.fbProv.getNextPhotos(this.imageUrls.paging.next).then(res => {
      this.imageUrls = res;
      this.photos = [];
      this.getPhotosUrl(this.imageUrls.data, this.photos);
    }).catch(err => {
      console.log("no next");
    })   
  }

  prePart() {
    this.fbProv.getNextPhotos(this.imageUrls.paging.previous).then(res => {
      this.imageUrls = res;
      this.photos = [];
      this.getPhotosUrl(this.imageUrls.data, this.photos);
    }).catch(err => {
      console.log("no pre");
    })   
  }

  getPhotosUrl(photos: Photo[], urls: any[]): any[] {
    for(let i = 0; i < photos.length; i++) {
      urls.push({url: photos[i].images[0].source});
    }
    return urls;
  }

}
