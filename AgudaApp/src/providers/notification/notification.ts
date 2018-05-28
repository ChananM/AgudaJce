import { DatabaseProvider } from './../database/database';
import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';
import { Platform, Events } from 'ionic-angular';

@Injectable()
export class NotificationProvider {

  notification = null;

  constructor(public events: Events, public platform: Platform, private fcm: FCM, private db: DatabaseProvider) {
    
  }

  initNotificationsListener(){
    if(this.platform.is('cordova')){
      this.fcm.onNotification().subscribe(data => {
          this.events.publish('notification', data);
          this.notification = data;
      });
      this.fcm.subscribeToTopic('pushes');
    }
  }

  showNotificationAlert(notification){
    alert(notification.title + (notification.body != null ? "\n" + notification.body : ""));
  }

  sendGeneralNotification(body: string){
    return this.db.uploadNotification(body);
  }
}

