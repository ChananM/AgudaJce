import { NotificationProvider } from './../providers/notification/notification';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EntryScreenPage } from './../pages/entry-screen/entry-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, np: NotificationProvider) {
    this.rootPage = EntryScreenPage;
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();

      np.initNotificationsListener()
    });
  }
}
