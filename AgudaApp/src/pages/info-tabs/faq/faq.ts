import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-faq',
 templateUrl: 'faq.html',
 // templateUrl: 'template.html'
})
export class FaqPage {


items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }


  initializeItems() {
    this.items = [
      'כמה חנן שמאלי מ1 עד 200?',
      'פאס פאס איטס אה קאם',
      'באש ובמים ביתר ירושלים',
      'דה קואוץ איז ורי ורי סטרונג' ,
      'אגודהדהדהדה',
      'מה המייל של המנקה מקומה 3?',
      'איפה המשרד של אחמד מהקפיטריה?',
      'ציונים בבדידה',
      'עלה ירוק לשלטון',
      'בללבלה בלה בלה בלה בלבלבלב'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }










  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}



