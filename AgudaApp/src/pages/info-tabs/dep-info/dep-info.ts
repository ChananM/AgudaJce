import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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


items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepInfoPage');
  }


  initializeItems()
  {
    this.items=
    [

      "מחלקת תרבות",
      "מחלקת ספורט",
      "מחלקת דוברות",
      "מחלקת תרבות חוץ"
    ]

      




    }




  }

