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
    this.items=[
      {quest: "Wallpapers", ans: "6",isOpen:false},
      {quest: "Galaxy", ans: "3",isOpen:false},
      {quest: "bla", ans: "lala",isOpen:false},
      {quest: "no", ans: "yes",isOpen:false},
      {quest: "odelia", ans: "evgi",isOpen:false},
      {quest: "daniel", ans: "lifshitz",isOpen:false},
      {quest: "lior", ans: "vaknin",isOpen:false},
      {quest: "eliya", ans: "wwwww",isOpen:false},
      {quest: "chanan", ans: "merari",isOpen:false},
      {quest: "reuven", ans: "yagel",isOpen:false}
    ];
  

   



  }
  toggleSection(i) {
    this.items[i].isOpen = !this.items[i].isOpen;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.quest.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }










  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}



