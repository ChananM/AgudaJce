import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EntryScreenPage } from './../pages/entry-screen/entry-screen';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, fcm: FCM) {
    this.rootPage = EntryScreenPage;
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();

      if(platform.is('cordova')){
        fcm.onNotification().subscribe(data => {
          if(data.wasTapped){ // will complete after server side
            alert(JSON.stringify(data))
          } else {
            alert(JSON.stringify(data))
          }
        });

        fcm.subscribeToTopic('pushes');
      }
    });
  }
}
