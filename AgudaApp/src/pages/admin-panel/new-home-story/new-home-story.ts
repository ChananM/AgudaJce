import { HomeStoryProvider } from './../../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, LoadingController } from 'ionic-angular';
import { HomeStory } from '../../../models/homeStory.model';

@IonicPage()
@Component({
  selector: 'page-new-home-story',
  templateUrl: 'new-home-story.html',
})
export class NewHomeStoryPage {

  headline: string;
  content: string;
  imageUrl: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              public storyProvider: HomeStoryProvider,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHomeStoryPage');
  }

  async save(){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    await this.storyProvider.addStory(new HomeStory(this.imageUrl, this.headline, this.content))
      .then(() => {
        toastOpt.message = 'Story added successfully';
      })
      .catch(() => {
        toastOpt.message = 'Failed to add story';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
    this.viewCtrl.dismiss();
  }

  cancel(){
    this.viewCtrl.dismiss();
  }
}
