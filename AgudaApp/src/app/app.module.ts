/* #### PLUG-INS #### */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Calendar } from '@ionic-native/calendar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/* #### PAGES #### */
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { CalendarPage } from '../pages/calendar/calendar';
import { GalleryPage } from '../pages/gallery/gallery';
import { FbImagesPage } from '../pages/gallery/fb-images/fb-images';

import { AdminPanelPage } from './../pages/admin-panel/admin-panel';
import { StoryArticlePage } from '../pages/home/story-article/story-article';

import { InfoTabsPage } from './../pages/info-tabs/info-tabs';
import { ContactPage } from '../pages/info-tabs/contact/contact';
import { DepInfoPage } from '../pages/info-tabs/dep-info/dep-info';
import { FaqPage } from '../pages/info-tabs/faq/faq';
import { AboutPage } from '../pages/info-tabs/about/about';

/* #### MODULES #### */
import { NewEventPageModule } from './../pages/admin-panel/new-event/new-event.module';
import { NewHomeStoryPageModule } from './../pages/admin-panel/new-home-story/new-home-story.module';
import { EntryScreenPageModule } from './../pages/entry-screen/entry-screen.module';

import { ComponentsModule } from '../components/components.module';

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

/* #### FIREBASE #### */
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage'

/* #### COMPONENTS #### */
import { RefreshComponent } from '../components/refresh/refresh';

/* #### PROVIDERS #### */ 
import { AuthProvider } from '../providers/auth/auth';
import { DatabaseProvider } from '../providers/database/database';
import { HomeStoryProvider } from './../providers/home-story/home-story';
import { CalendarEventProvider } from '../providers/calendar-event/calendar-event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StoryArticlePage,
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
    FaqPage,
    FbImagesPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ComponentsModule,
    EntryScreenPageModule,
    NewHomeStoryPageModule,
    NewEventPageModule,
    ionicGalleryModal.GalleryModalModule,
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    InfoPage,
    HomePage,
    StoryArticlePage,
    CalendarPage,
    GalleryPage,
    RefreshComponent,
    AdminPanelPage,
    TabsPage,
    InfoTabsPage,
    AboutPage,
    ContactPage,
    DepInfoPage,
    FaqPage,
    FbImagesPage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HAMMER_GESTURE_CONFIG, useClass: ionicGalleryModal.GalleryModalHammerConfig},
    HomeStoryProvider,
    CalendarEventProvider,
    DatabaseProvider,
    Calendar,
    InAppBrowser,
    AuthProvider
  ]
})

export class AppModule {}
