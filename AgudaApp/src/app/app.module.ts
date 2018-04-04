import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { GalleryPage } from '../pages/gallery/gallery';

import { RefreshComponent } from '../components/refresh/refresh';
import { HomeDataComponent } from '../components/home-data/home-data';

import { ComponentsModule } from '../components/components.module';
import { EntryScreenPageModule } from './../pages/entry-screen/entry-screen.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    CalendarPage,
    GalleryPage,
    RefreshComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    EntryScreenPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    HomePage,
    CalendarPage,
    GalleryPage,
    RefreshComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
