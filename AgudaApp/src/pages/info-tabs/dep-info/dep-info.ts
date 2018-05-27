import { DepartmentsPage } from './departments/departments';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the DepInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dep-info',
  templateUrl: 'dep-info.html',
})


export class DepInfoPage {

titles;

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public navParams: NavParams) {
    this.initializeItems();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepInfoPage');
  }




  moveToDept(title: string)
  {
    let modal = this.modalCtrl.create(DepartmentsPage, {title: title});
    modal.present();
      
  }

  initializeItems()
  {
    this.titles=
    [
      
      "מחלקת ספורט",
      "מחלקת דוברות",
      "מחלקת תרבות חוץ",
      "מחלקת אקדמיה",
      "מחלקת רווחה",
      "מחלקת החברה הערבית",
      "מחלקת תרבות פנים"
    ]


  }

  


  }

