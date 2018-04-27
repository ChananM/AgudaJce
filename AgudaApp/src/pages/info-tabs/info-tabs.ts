import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from './about/about';
import { FaqPage } from './faq/faq';
import { ContactPage } from './contact/contact';
import { DepInfoPage } from './dep-info/dep-info';

/**
 * Generated class for the InfoTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-info-tabs',
  templateUrl: 'info-tabs.html'
})
export class InfoTabsPage {

  aboutRoot = AboutPage
  faqRoot = FaqPage
  contactRoot = ContactPage
  depInfoRoot = DepInfoPage


  constructor(public navCtrl: NavController) {}

}
