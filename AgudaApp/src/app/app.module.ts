import { InfoTabsPage } from './../pages/info-tabs/info-tabs';
import { AdminPanelPage } from './../pages/admin-panel/admin-panel';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { GalleryPage } from '../pages/gallery/gallery';

import { RefreshComponent } from '../components/refresh/refresh';

import { ComponentsModule } from '../components/components.module';
import { EntryScreenPageModule } from './../pages/entry-screen/entry-screen.module';
import { HomeDataProvider } from '../providers/home-data/home-data';
import { CalendarEventProvider } from '../providers/calendar-event/calendar-event';
import { ContactPage } from '../pages/info-tabs/contact/contact';
import { DepInfoPage } from '../pages/info-tabs/dep-info/dep-info';
import { FaqPage } from '../pages/info-tabs/faq/faq';
import { AboutPage } from '../pages/info-tabs/about/about';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    CalendarPage,
    GalleryPage,
    RefreshComponent,
    AdminPanelPage,
    TabsPage,
    InfoTabsPage,
    AboutPage,
    ContactPage,
    DepInfoPage,
    FaqPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
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
    AdminPanelPage,
    TabsPage,
    InfoTabsPage,
    AboutPage,
    ContactPage,
    DepInfoPage,
    FaqPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeDataProvider,
    CalendarEventProvider
  ]
})

export class AppModule {}
