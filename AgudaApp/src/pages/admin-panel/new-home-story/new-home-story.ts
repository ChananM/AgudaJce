import { HomeStoryProvider } from './../../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, LoadingController } from 'ionic-angular';
import { HomeStory } from '../../../models/homeStory.model';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-new-home-story',
  templateUrl: 'new-home-story.html',
})
export class NewHomeStoryPage {

  inputStory: HomeStory;

  headline: string;
  content: string;
  imageUrl: string = "";
  tmpUrl: string = "";
  preview: string;

  pageTitle = "סיפור חדש";
  actionButton = "הוספה";

  imgFile: File = null;
  uploadPercent: number = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              public storyProvider: HomeStoryProvider,
              private toastCtrl: ToastController,
              private auth: AuthProvider) {

                this.inputStory = this.navParams.get('story');
                if(this.inputStory != null){
                  this.headline = this.inputStory.headline;
                  this.content = this.inputStory.content;
                  this.imageUrl = this.inputStory.imageURL;
                  this.preview = this.inputStory.preview;
                  this.pageTitle = "ערוך סיפור";
                  this.actionButton = "ערוך";
                }
  }

  ionViewCanEnter(){
    return this.auth.isSignedIn() && document.URL.includes('adminpanel');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHomeStoryPage');
  }

  save(){
    if(this.actionButton === "הוספה"){
      this.addStory();
    } else {
      this.editStory();
    }
  }

  async addStory(){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    if(this.imageUrl == "") {this.imageUrl = this.tmpUrl};
    await this.storyProvider.addStory(new HomeStory(this.imageUrl, this.headline, this.content, this.preview))
      .then(() => {
        toastOpt.message = 'הסיפור נוסף בהצלחה';
      })
      .catch(() => {
        toastOpt.message = 'וואלה הסתבכתי קצת, נסה שוב';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
    this.viewCtrl.dismiss();
  }

  async editStory(){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    if(this.imageUrl == "") {this.imageUrl = this.tmpUrl};
    await this.storyProvider.editStory(this.inputStory.setParams(this.imageUrl, this.headline, this.content, this.preview))
      .then(() => {
        toastOpt.message = 'הסיפור שונה בהצלחה';
      })
      .catch(() => {
        toastOpt.message = 'וואלה הסתבכתי קצת, נסה שוב';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
    this.viewCtrl.dismiss();
  }

  cancel(){
    if (this.imgFile != null){
      this.removeImage(this.imageUrl);
    }
    this.viewCtrl.dismiss();
  }

  uploadImage(event){
    console.log(event);
    if(event.target.files[0] != null){
      if(this.imgFile == event.target.files[0]){
        return;
      }
      if(this.imgFile != null && this.imgFile != event.target.files[0]){
        this.removeImage(this.imageUrl);
      }
      this.imgFile = <File>event.target.files[0];
      if(!this.imgFile.type.includes('image')){
        alert('File should be image only.')
        this.imgFile = null;
        return;
      }
      const task = this.storyProvider.uploadImg(this.imgFile);
      let sub1 = task.percentageChanges().subscribe(percent => {
        this.uploadPercent = Math.round(percent);
        if(percent == 100)
          sub1.unsubscribe();
      })
      let sub2 = task.downloadURL().subscribe(url => {
        this.imageUrl = url;
        sub2.unsubscribe();
      })
      this.tmpUrl = this.imgFile.name;
    }
  }

  removeImage(url){
    this.storyProvider.deleteImg(url);
    this.imgFile = null;
    this.imageUrl = "";
    this.tmpUrl = "";
    this.uploadPercent = null;
  }
}
