import { Albums } from './../../models/interfaces';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { FbImagesPage } from './fb-images/fb-images';
import { FacebookProvider } from '../../providers/facebook/facebook';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  public allowed: boolean = false; 
  public albums: Albums;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public fbProv: FacebookProvider,
              public loadingCtrl: LoadingController) {
          
                let loader = this.loadingCtrl.create();
                loader.present();

                fbProv.getAllAlbums().then(res =>{
                  this.albums = res;
                  console.log(this.albums)
                  this.allowed = true;
                  loader.dismiss()
                }).catch(err => {
                  console.log(err);
                  loader.dismiss()
                })   

  }

  ionViewDidEnter() {
    this.doRefresh();
  }

  doRefresh() {
    console.log("galery refresh");
  }

  async callAlbum(album) {
    console.log(album);
    //this.navCtrl.push(FbImagesPage, {headline: headline, content: content, imageUrl: imageUrl})
  }
}
