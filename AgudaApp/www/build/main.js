webpackJsonp([1],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_calendarEvent_model__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_homeStory_model__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(afs) {
        this.afs = afs;
        this.homeStoriesCollection = afs.collection('HomeStories', function (ref) { return ref.orderBy('createdOn', 'desc'); });
        this.calEventsCollection = afs.collection('Events', function (ref) { return ref.orderBy('createdOn', 'desc'); });
        this.homeStories = this.homeStoriesCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var temp = a.payload.doc.data();
                temp.id = a.payload.doc.id;
                var data = __WEBPACK_IMPORTED_MODULE_1__models_homeStory_model__["a" /* HomeStory */].toHomeStory(temp);
                return data;
            });
        });
        this.calEvents = this.calEventsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var temp = a.payload.doc.data();
                temp.id = a.payload.doc.id;
                var data = __WEBPACK_IMPORTED_MODULE_0__models_calendarEvent_model__["a" /* CalendarEvent */].toCalEvent(temp);
                return data;
            });
        });
    }
    //*******************************************************/
    /* #### USE IT LIKE THIS: ####
     dbProvider.getHomeStories().subscribe(stories => {
       stories.forEach(element => {
         console.log(element.id);  //you will get the id automaticlly from firebase.
       });
     });
         i already put it in your provider constructor. */
    DatabaseProvider.prototype.getHomeStories = function () {
        return this.homeStories;
    };
    //*******************************************************/
    //*******************************************************/
    //you can also do: let x = dbProvider.getHomeStories();
    //                x.subscribe...... etc
    //*******************************************************/
    //*******************************************************/
    /* #### USE IT LIKE THIS: ####
     dbProvider.getCalEvents().subscribe(events => { ;
       .....
          ////you will get the id automaticlly from firebase.
    });
        i already put it in your provider constructor.*/
    DatabaseProvider.prototype.getCalEvents = function () {
        return this.calEvents;
    };
    //*******************************************************/
    DatabaseProvider.prototype.addHomeStory = function (story) {
        story.createdOn = this.getCurrentTimestamp();
        return this.homeStoriesCollection.add(__WEBPACK_IMPORTED_MODULE_1__models_homeStory_model__["a" /* HomeStory */].toObject(story));
    };
    DatabaseProvider.prototype.addCalEvent = function (event) {
        event.createdOn = this.getCurrentTimestamp();
        return this.calEventsCollection.add(__WEBPACK_IMPORTED_MODULE_0__models_calendarEvent_model__["a" /* CalendarEvent */].toObject(event));
    };
    DatabaseProvider.prototype.deleteHomeStory = function (story) {
        return this.homeStoriesCollection.doc(story.id).delete();
    };
    DatabaseProvider.prototype.deleteCalEvent = function (event) {
        return this.calEventsCollection.doc(event.id).delete();
    };
    DatabaseProvider.prototype.getCurrentTimestamp = function () {
        var date = new Date();
        return "" + date.getFullYear() + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1)
            + (date.getDate() < 10 ? "0" : "") + date.getDate()
            + (date.getHours() == 0 ? "0" : "") + (date.getHours() < 10 ? "0" : "") + date.getHours()
            + (date.getMinutes() == 0 ? "0" : "") + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
            + (date.getSeconds() == 0 ? "0" : "") + (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_database__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_calendarEvent_model__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Date format is ISO 8601 "YYYY-MM-DD" the value is a string
var CalendarEventProvider = /** @class */ (function () {
    //when you start to use firebase, use what inside the constractor.
    function CalendarEventProvider(dbProvider) {
        this.dbProvider = dbProvider;
        // dbProvider.getCalEvents().subscribe(stories => { 
        //   this.posts = stories;
        //   console.log(this.posts);
        // })
    }
    CalendarEventProvider.prototype.load = function () {
        this.posts = [
            new __WEBPACK_IMPORTED_MODULE_1__models_calendarEvent_model__["a" /* CalendarEvent */]("", this.isoToDate("2018-04-24"), "Test", "האירוע המטריף של הקיץ - בדיקת אפליקציות", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_calendarEvent_model__["a" /* CalendarEvent */]("https://s-i.huffpost.com/gen/1842880/images/n-NIGHTCLUB-628x314.jpg", this.isoToDate("2018-03-10"), "מסיבה", "בלה-בלה-בלה,לה-לה-לה", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_calendarEvent_model__["a" /* CalendarEvent */]("https://c.wallhere.com/photos/90/73/disco_club_dance_hands-723564.jpg!d", this.isoToDate("2018-04-24"), "Test3", "Let's test our calendar event", false)
        ];
    };
    CalendarEventProvider.prototype.isoToDate = function (dateStr) {
        return new Date(dateStr);
    };
    CalendarEventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__database_database__["a" /* DatabaseProvider */]])
    ], CalendarEventProvider);
    return CalendarEventProvider;
}());

//# sourceMappingURL=calendar-event.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_tabs_info_tabs__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.tabName = 'מידע';
        this.refresh_id = 'infoRef';
        this.infoRoot = __WEBPACK_IMPORTED_MODULE_2__info_tabs_info_tabs__["a" /* InfoTabsPage */];
    }
    InfoPage.prototype.ionViewDidEnter = function () {
        this.events.publish('tab', this.tabName, this.refresh_id);
        this.doRefresh();
    };
    InfoPage.prototype.doRefresh = function () {
        console.log("info refresh");
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info\info.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n\n        <page-info-tabs></page-info-tabs>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n    <ion-nav [root]="infoRoot"></ion-nav>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info\info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_home_story_home_story__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, events, postsService, platform) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.postsService = postsService;
        this.platform = platform;
        this.tabName = 'ראשי';
        this.refresh_id = 'homeRef';
        this.title = 'ברוכים הבאים לאגודת הסטודנטים עזריאלי!';
        if (this.platform.is('core')) {
            //if it's from computer web browser, not a mobile web/native.
            this.browserSize = "desktop-card";
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.events.publish('tab', this.tabName, this.refresh_id);
        this.doRefresh();
    };
    HomePage.prototype.doRefresh = function () {
        console.log("home refresh");
        this.postsService.load();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <main>\n\n        <h1>\n\n            {{ title }}\n\n        </h1>\n\n        <img src="assets/imgs/logo.png" width="200" height="200">\n\n        <hr>\n\n        <ion-row justify-content-center *ngFor="let post of postsService.posts; let i = index;">\n\n            <ion-card id="postCard_{{i}}" [ngClass]="browserSize">\n\n                <img src={{post.imageURL}}/>\n\n                <ion-card-content text-wrap>\n\n                    <ion-card-title text-wrap>\n\n                        {{post.headline}}\n\n                    </ion-card-title>\n\n                    <p>\n\n                        {{post.content}}\n\n                    </p>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-row>\n\n    </main>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_0__providers_home_story_home_story__["a" /* HomeStoryProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fb_images_fb_images__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, navParams, events, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.platform = platform;
        this.tabName = 'גלריה';
        this.refresh_id = 'gallRef';
        this.albumArray = [
            { headline: "USA",
                content: "3",
                imageUrl: ["https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ5OuPIS8LJkCmfAr-zPV_Q4Z2KD_DACAI7bvs0RzfBe_iQZf",
                    "https://www.hayadan.org.il/images/content3/2010/05/Drinking_water_wikipedia.jpg"] },
            { headline: "Canada",
                content: "3 states",
                imageUrl: ["https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ5OuPIS8LJkCmfAr-zPV_Q4Z2KD_DACAI7bvs0RzfBe_iQZf",
                    "https://www.hayadan.org.il/images/content3/2010/05/Drinking_water_wikipedia.jpg"] },
            { headline: "Israel",
                content: "1 states",
                imageUrl: ["https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ5OuPIS8LJkCmfAr-zPV_Q4Z2KD_DACAI7bvs0RzfBe_iQZf",
                    "https://www.hayadan.org.il/images/content3/2010/05/Drinking_water_wikipedia.jpg"] },
        ];
    }
    GalleryPage.prototype.ionViewDidEnter = function () {
        this.events.publish('tab', this.tabName, this.refresh_id);
        this.doRefresh();
    };
    GalleryPage.prototype.doRefresh = function () {
        console.log("galery refresh");
    };
    GalleryPage.prototype.callAlbum = function (headline, content, imageUrl) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fb_images_fb_images__["a" /* FbImagesPage */], { headline: headline, content: content, imageUrl: imageUrl });
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\gallery\gallery.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-row justify-content-center *ngFor="let album of albumArray;">\n\n        <ion-card [ngClass]="{\'album\': this.platform.is(\'core\')}" (click) = "callAlbum(album.headline, album.content, album.imageUrl)">\n\n            <img src = {{album.imageUrl[0]}}/>\n\n            <div class="card-title">{{album.headline}}</div>\n\n            <div class="card-subtitle">{{album.content}}</div>\n\n        </ion-card>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\gallery\gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, events, calendarProvider, platform) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.calendarProvider = calendarProvider;
        this.platform = platform;
        this.tabName = 'יומן אירועים';
        this.refresh_id = 'calendarRef';
        this.dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
    };
    CalendarPage.prototype.ionViewDidEnter = function () {
        this.events.publish('tab', this.tabName, this.refresh_id);
        this.doRefresh();
    };
    CalendarPage.prototype.doRefresh = function () {
        console.log("calendar refresh");
        this.calendarProvider.load();
    };
    CalendarPage.prototype.toggleSection = function (i) {
        this.calendarProvider.posts[i].open = !this.calendarProvider.posts[i].open;
    };
    CalendarPage.prototype.addToPlatformCalendar = function (i) {
        console.log("this event will be added to the platform calendar");
        console.log(this.calendarProvider.posts[i]);
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\calendar\calendar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list *ngFor="let post of calendarProvider.posts; let i = index">\n\n        <ion-item-sliding>\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                    <img *ngIf="post.imageURL != \'\'; else elsetag" src={{post.imageURL}}>\n\n                    <ng-template #elsetag>\n\n                        <img src="assets/imgs/logo.png">\n\n                    </ng-template>\n\n                </ion-thumbnail>\n\n                <h2 text-wrap>{{post.headline}}</h2>\n\n                <p text-wrap>{{post.date.toLocaleString(\'he-IL\',dateOptions)}}</p>\n\n                <button ion-button clear item-end (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': post.open, \'section\': !post.open}">\n\n                    <ion-icon item-left name="arrow-dropdown-circle" *ngIf="!post.open"></ion-icon>\n\n                    <ion-icon item-left name="arrow-dropup-circle" *ngIf="post.open"></ion-icon>\n\n                </button>\n\n            </ion-item>\n\n            <ion-item-options side="left" dir="ltr">\n\n                <button ion-button color="primary" (click)="addToPlatformCalendar(i)">\n\n                    <ion-icon name="add"></ion-icon>\n\n                    ללוח שנה\n\n                </button>\n\n            </ion-item-options>\n\n            <ion-item *ngIf="post.open">\n\n                <p text-wrap>{{post.content}}</p>\n\n            </ion-item>\n\n            \n\n        </ion-item-sliding>\n\n     </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__["a" /* CalendarEventProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventPageModule", function() { return NewEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewEventPageModule = /** @class */ (function () {
    function NewEventPageModule() {
    }
    NewEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_event__["a" /* NewEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_event__["a" /* NewEventPage */]),
            ],
        })
    ], NewEventPageModule);
    return NewEventPageModule;
}());

//# sourceMappingURL=new-event.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-login/admin-login.module": [
		445,
		0
	],
	"../pages/admin-panel/new-event/new-event.module": [
		168
	],
	"../pages/admin-panel/new-home-story/new-home-story.module": [
		238
	],
	"../pages/entry-screen/entry-screen.module": [
		239
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewEventPage = /** @class */ (function () {
    function NewEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewEventPage');
    };
    NewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-event',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\new-event\new-event.html"*/'<!--\n\n  Generated template for the NewEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>NewEvent</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\new-event\new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewHomeStoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_home_story_home_story__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_homeStory_model__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewHomeStoryPage = /** @class */ (function () {
    function NewHomeStoryPage(navCtrl, navParams, storyProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storyProvider = storyProvider;
        this.toastCtrl = toastCtrl;
    }
    NewHomeStoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewHomeStoryPage');
    };
    NewHomeStoryPage.prototype.save = function () {
        var toastOpt = {
            message: '',
            duration: 3000,
            cssClass: 'toastClass',
            position: 'bottom'
        };
        this.storyProvider.addStory(new __WEBPACK_IMPORTED_MODULE_3__models_homeStory_model__["a" /* HomeStory */](this.imageUrl, this.headline, this.content))
            .then(function () {
            toastOpt.message = 'Story added successfully';
        })
            .catch(function () {
            toastOpt.message = 'Failed to add story';
        });
        this.toastCtrl.create(toastOpt).present();
        this.navCtrl.pop();
    };
    NewHomeStoryPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    NewHomeStoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-new-home-story',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\new-home-story\new-home-story.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>New Story</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Headline</ion-label>\n\n    <ion-input [(ngModel)]="headline" type="headline" name="Headline" required="required"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Content</ion-label>\n\n    <ion-textarea [(ngModel)]="content" type="content" name="Content" required="required" item-height="300px"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Image URL</ion-label>\n\n    <ion-input [(ngModel)]="imageUrl" type="imageURL" name="Image URL" required="required"></ion-input>\n\n  </ion-item>\n\n  <p></p>\n\n  <ion-buttons>\n\n    <button *ngIf="headline && content && imageUrl" ion-button (click)="save()">Save</button>\n\n    <!-- Show dead button if form is not filled -->\n\n    <button *ngIf="!headline || !content || !imageUrl" ion-button color="darkGray">Save</button>\n\n    <button ion-button (click)="cancel()">Cancel</button>\n\n  </ion-buttons>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\new-home-story\new-home-story.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_home_story_home_story__["a" /* HomeStoryProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], NewHomeStoryPage);
    return NewHomeStoryPage;
}());

//# sourceMappingURL=new-home-story.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__(216);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//NEVER set the fields "id" and "createdOn" manually. firebase will do it automaticlly
var CalendarEvent = /** @class */ (function (_super) {
    __extends(CalendarEvent, _super);
    function CalendarEvent(imageURL, date, headline, content, open, id, createdOn) {
        var _this = _super.call(this) || this;
        _this.imageURL = imageURL;
        _this.date = date;
        _this.headline = headline;
        _this.content = content;
        _this.open = open;
        _this.id = id;
        _this.createdOn = createdOn;
        return _this;
    }
    //func for firebase, avoid it.
    CalendarEvent.toCalEvent = function (json) {
        var event = Object.create(CalendarEvent.prototype);
        return Object.assign(event, json);
    };
    return CalendarEvent;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));

//# sourceMappingURL=calendarEvent.model.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.toObject = function (item) {
        return JSON.parse(JSON.stringify(item));
    };
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeStory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__(216);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var HomeStory = /** @class */ (function (_super) {
    __extends(HomeStory, _super);
    //NEVER set the fields "id" and "createdOn" manually. firebase will do it automaticlly
    function HomeStory(imageURL, headline, content, id, createdOn) {
        var _this = _super.call(this) || this;
        _this.imageURL = imageURL;
        _this.headline = headline;
        _this.content = content;
        _this.id = id;
        _this.createdOn = createdOn;
        return _this;
    }
    //func for firebase, avoid it.
    HomeStory.toHomeStory = function (json) {
        var story = Object.create(HomeStory.prototype);
        return Object.assign(story, json);
    };
    return HomeStory;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));

//# sourceMappingURL=homeStory.model.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHomeStoryPageModule", function() { return NewHomeStoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_home_story__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewHomeStoryPageModule = /** @class */ (function () {
    function NewHomeStoryPageModule() {
    }
    NewHomeStoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_home_story__["a" /* NewHomeStoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_home_story__["a" /* NewHomeStoryPage */]),
            ],
        })
    ], NewHomeStoryPageModule);
    return NewHomeStoryPageModule;
}());

//# sourceMappingURL=new-home-story.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryScreenPageModule", function() { return EntryScreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_screen__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntryScreenPageModule = /** @class */ (function () {
    function EntryScreenPageModule() {
    }
    EntryScreenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entry_screen__["a" /* EntryScreenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entry_screen__["a" /* EntryScreenPage */]),
            ],
        })
    ], EntryScreenPageModule);
    return EntryScreenPageModule;
}());

//# sourceMappingURL=entry-screen.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntryScreenPage = /** @class */ (function () {
    function EntryScreenPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        setTimeout(function () {
            navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], {}, { animate: true, direction: 'forward', duration: 1250 });
        }, 3000);
    }
    EntryScreenPage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('core')) {
            //if it's from computer web browser, not a mobile web/native.
            document.getElementById('enter').setAttribute('width', '25%');
            document.getElementById('overlay').style.left = "48%";
        }
        else {
            document.getElementById('enter').setAttribute('width', '100%');
            document.getElementById('overlay').style.left = "45%";
        }
    };
    EntryScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-entry-screen',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\entry-screen\entry-screen.html"*/'<div class="entryLoader">\n\n    <img id=\'enter\' src="assets/imgs/logo.png">\n\n    <span id=\'overlay\'><i class="fas fa-spinner fa-pulse"></i></span>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\entry-screen\entry-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], EntryScreenPage);
    return EntryScreenPage;
}());

//# sourceMappingURL=entry-screen.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_info__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_gallery__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.homeTab = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.calendarTab = __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__["a" /* CalendarPage */];
        this.galleryTab = __WEBPACK_IMPORTED_MODULE_3__gallery_gallery__["a" /* GalleryPage */];
        this.infoTab = __WEBPACK_IMPORTED_MODULE_1__info_info__["a" /* InfoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\tabs\tabs.html"*/'<ion-tabs class="tabbar_red">\n\n    <ion-tab [root]="homeTab" tabTitle="בית" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="calendarTab" tabTitle="יומן" tabIcon="calendar"></ion-tab>\n\n    <ion-tab [root]="galleryTab" tabTitle="גלריה" tabIcon="images"></ion-tab>\n\n    <ion-tab [root]="infoTab" tabTitle="מידע" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_faq__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dep_info_dep_info__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the InfoTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoTabsPage = /** @class */ (function () {
    function InfoTabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.aboutRoot = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.faqRoot = __WEBPACK_IMPORTED_MODULE_3__faq_faq__["a" /* FaqPage */];
        this.contactRoot = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
        this.depInfoRoot = __WEBPACK_IMPORTED_MODULE_5__dep_info_dep_info__["a" /* DepInfoPage */];
    }
    InfoTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-tabs',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\info-tabs.html"*/'<ion-tabs tabsPlacement="top" class="infoTabsUp">\n    <ion-tab [root]="aboutRoot" tabTitle="אודות"  tabIcon="information"></ion-tab>\n    <ion-tab text-wrap [root]="faqRoot" tabTitle="שאלות ותשובות" tabIcon="help"></ion-tab>\n    <ion-tab [root]="contactRoot" tabTitle="צור קשר" tabIcon="call"></ion-tab>\n    <ion-tab [root]="depInfoRoot" tabTitle="מידע כללי" tabIcon="globe"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\info-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], InfoTabsPage);
    return InfoTabsPage;
}());

//# sourceMappingURL=info-tabs.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>about</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n  <h1>עמוד מידע פנימי - אודות</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initializeItems();
    }
    FaqPage.prototype.initializeItems = function () {
        this.items = [
            'כמה חנן שמאלי מ1 עד 200?',
            'פאס פאס איטס אה קאם',
            'באש ובמים ביתר ירושלים',
            'דה קואוץ איז ורי ורי סטרונג',
            'אגודהדהדהדה',
            'מה המייל של המנקה מקומה 3?',
            'איפה המשרד של אחמד מהקפיטריה?',
            'ציונים בבדידה',
            'עלה ירוק לשלטון',
            'בללבלה בלה בלה בלה בלבלבלב'
        ];
    };
    FaqPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\faq\faq.html"*/'<!--\n\n  Generated template for the FaqPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>faq</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n\n\n    <ion-content padding>\n\n            <h1>עמוד מידע פנימי - שאלות ותשובות</h1>\n\n\n\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n            <ion-list>\n\n              <ion-item *ngFor="let item of items">\n\n                {{ item }}\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], FaqPage);
    return FaqPage;
    var _a, _b;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>contact</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n  <h1>עמוד מידע פנימי - צור קשר</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DepInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepInfoPage = /** @class */ (function () {
    function DepInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DepInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepInfoPage');
    };
    DepInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dep-info',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\dep-info\dep-info.html"*/'<!--\n\n  Generated template for the DepInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>depInfo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding >\n\n  <h1>עמוד מידע פנימי - מידע על מחלקות</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\dep-info\dep-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DepInfoPage);
    return DepInfoPage;
}());

//# sourceMappingURL=dep-info.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FbImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FbImagesPage = /** @class */ (function () {
    function FbImagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headline = navParams.get('headline');
        this.content = navParams.get('content');
        this.imageUrl = navParams.get('imageUrl');
    }
    FbImagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FbImagesPage');
    };
    FbImagesPage.prototype.callImag = function () {
        alert("click");
    };
    FbImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fb-images',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\gallery\fb-images\fb-images.html"*/'<!--\n  Generated template for the FbImagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{headline}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row justify-content-center *ngFor="let image of imageUrl;">\n     <!-- <ion-card [ngClass]="{\'image\': this.platform.is(\'core\')}"> (click) = "callImag()"> -->\n        <img src = {{image}}/>\n    <!-- </ion-card> -->\n</ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\gallery\fb-images\fb-images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FbImagesPage);
    return FbImagesPage;
}());

//# sourceMappingURL=fb-images.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_event_new_event__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_home_story_new_home_story__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendar_event_calendar_event__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_story_home_story__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminPanelPage = /** @class */ (function () {
    function AdminPanelPage(navCtrl, modalCtrl, storyProv, calProv, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storyProv = storyProv;
        this.calProv = calProv;
        this.toastCtrl = toastCtrl;
        this.newHomePage = __WEBPACK_IMPORTED_MODULE_1__new_home_story_new_home_story__["a" /* NewHomeStoryPage */];
        this.newCalendarPage = __WEBPACK_IMPORTED_MODULE_0__new_event_new_event__["a" /* NewEventPage */];
    }
    AdminPanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPanelPage');
        this.storyProv.load();
        this.calProv.load();
        this.modelController = "home";
    };
    AdminPanelPage.prototype.deleteStory = function (story) {
        var toastOpt = {
            message: '',
            duration: 3000,
            cssClass: 'toastClass',
            position: 'bottom'
        };
        this.storyProv.deleteStory(story)
            .then(function () {
            toastOpt.message = 'Story deleted successfully';
        })
            .catch(function () {
            toastOpt.message = 'Failed to delete story';
        });
        this.toastCtrl.create(toastOpt).present();
    };
    AdminPanelPage.prototype.presentModal = function (page) {
        var modal = this.modalCtrl.create(page);
        modal.present();
    };
    AdminPanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-admin-panel',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\admin-panel.html"*/'<ion-content padding>\n\n    <div padding>\n\n        <ion-segment [(ngModel)]="modelController">\n\n            <ion-segment-button value="home">\n\n                Home\n\n            </ion-segment-button>\n\n            <ion-segment-button value="calendar">\n\n                Calendar\n\n            </ion-segment-button>\n\n            <ion-segment-button value="info">\n\n                Information\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="modelController">\n\n\n\n        <!-- Home Data admin panel segment -->\n\n\n\n        <ng-container *ngSwitchCase="\'home\'">\n\n            <ion-list>\n\n                <ion-item *ngFor="let post of storyProv.posts;">\n\n                    <h2>{{post.headline}}</h2>\n\n                    <button icon-only item-end (click)="deleteStory(post)"><ion-icon name="close" color="danger"></ion-icon></button>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button (click)="presentModal(newHomePage)">Add Story</button>\n\n        </ng-container>\n\n\n\n        <!-- Calendar admin panel segment -->\n\n\n\n        <ng-container *ngSwitchCase="\'calendar\'">\n\n            <ion-list>\n\n                <ion-item *ngFor="let event of calProv.posts;">\n\n                    <h2>{{event.headline}}</h2>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button (click)="presentModal(newCalendarPage)">Add Event</button>\n\n        </ng-container>\n\n\n\n        <!-- Information admin panel segment -->\n\n\n\n        <ng-container *ngSwitchCase="\'info\'">\n\n            <div class="center">\n\n                <h1>Unavailable</h1>\n\n            </div>\n\n        </ng-container>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\admin-panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_home_story_home_story__["a" /* HomeStoryProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_calendar_event_calendar_event__["a" /* CalendarEventProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */]])
    ], AdminPanelPage);
    return AdminPanelPage;
}());

//# sourceMappingURL=admin-panel.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_admin_panel_new_event_new_event_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_admin_panel_new_home_story_new_home_story_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_info_tabs_info_tabs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_admin_panel_admin_panel__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_firebase_config__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_info_info__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_calendar_calendar__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_gallery_gallery__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_refresh_refresh__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_components_module__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_entry_screen_entry_screen_module__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_home_story_home_story__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_calendar_event_calendar_event__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_info_tabs_contact_contact__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_info_tabs_dep_info_dep_info__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_info_tabs_faq_faq__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_info_tabs_about_about__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_gallery_fb_images_fb_images__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_database_database__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_admin_panel_admin_panel__["a" /* AdminPanelPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_info_tabs_info_tabs__["a" /* InfoTabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_info_tabs_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_info_tabs_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_info_tabs_dep_info_dep_info__["a" /* DepInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_tabs_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_gallery_fb_images_fb_images__["a" /* FbImagesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-login/admin-login.module#AdminLoginPageModule', name: 'aguda-admin', segment: 'adminpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-panel/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-panel/new-home-story/new-home-story.module#NewHomeStoryPageModule', name: 'NewHomeStoryPage', segment: 'new-home-story', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entry-screen/entry-screen.module#EntryScreenPageModule', name: 'EntryScreenPage', segment: 'entry-screen', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_20__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_21__pages_entry_screen_entry_screen_module__["EntryScreenPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_admin_panel_new_home_story_new_home_story_module__["NewHomeStoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_admin_panel_new_event_new_event_module__["NewEventPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_admin_panel_admin_panel__["a" /* AdminPanelPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_info_tabs_info_tabs__["a" /* InfoTabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_info_tabs_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_info_tabs_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_info_tabs_dep_info_dep_info__["a" /* DepInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_tabs_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_gallery_fb_images_fb_images__["a" /* FbImagesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_home_story_home_story__["a" /* HomeStoryProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_calendar_event_calendar_event__["a" /* CalendarEventProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entry_screen_entry_screen__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_entry_screen_entry_screen__["a" /* EntryScreenPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyC-GQk9UIhaQnGv_NXLq4iazMmfLK5WL-M",
    authDomain: "agudajce-2018.firebaseapp.com",
    databaseURL: "https://agudajce-2018.firebaseio.com",
    projectId: "agudajce-2018",
    storageBucket: "agudajce-2018.appspot.com",
    messagingSenderId: "386963918160"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calendar_calendar__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_gallery_gallery__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_info_info__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RefreshComponent = /** @class */ (function () {
    function RefreshComponent(events, h, c, g, i) {
        var _this = this;
        this.events = events;
        this.h = h;
        this.c = c;
        this.g = g;
        this.i = i;
        this.events.subscribe('tab', function (tab, refresh) {
            _this.tab = tab;
            _this.ref_id = refresh;
        });
    }
    RefreshComponent.prototype.doRefresh = function () {
        document.getElementById(this.ref_id).getElementsByClassName('fa-sync').item(0).classList.add('fa-spin');
        if (this.tab == this.h.tabName)
            this.h.doRefresh();
        else if (this.tab == this.c.tabName)
            this.c.doRefresh();
        else if (this.tab == this.g.tabName)
            this.g.doRefresh();
        else if (this.tab == this.i.tabName)
            this.i.doRefresh();
        console.log('clicked');
        setTimeout(function () {
            document.getElementsByClassName('fa-spin').item(0).classList.remove('fa-spin');
        }, 1000);
    };
    RefreshComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_3__pages_calendar_calendar__["a" /* CalendarPage */], __WEBPACK_IMPORTED_MODULE_4__pages_gallery_gallery__["a" /* GalleryPage */], __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */]],
            selector: 'refresh',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\components\refresh\refresh.html"*/'<!-- Generated template for the RefreshComponent component -->\n\n<button (click)="doRefresh();">\n\n    <i class="fas fa-sync"></i>\n\n</button>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\components\refresh\refresh.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_3__pages_calendar_calendar__["a" /* CalendarPage */], __WEBPACK_IMPORTED_MODULE_4__pages_gallery_gallery__["a" /* GalleryPage */], __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */]])
    ], RefreshComponent);
    return RefreshComponent;
}());

//# sourceMappingURL=refresh.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeStoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeStoryProvider = /** @class */ (function () {
    //when you start use firebase, use what inside the constractor.
    function HomeStoryProvider(dbProvider) {
        var _this = this;
        this.dbProvider = dbProvider;
        dbProvider.getHomeStories().subscribe(function (stories) {
            _this.posts = stories;
            console.log(_this.posts);
        });
    }
    HomeStoryProvider.prototype.addStory = function (story) {
        return this.dbProvider.addHomeStory(story);
    };
    HomeStoryProvider.prototype.deleteStory = function (story) {
        return this.dbProvider.deleteHomeStory(story);
    };
    HomeStoryProvider.prototype.load = function () {
        // this.posts = [ // delete this in your time
        //   new HomeStory("http://www.nuclearblast.de/static/articles/260/260672.jpg/1000x1000.jpg", "On Her Journey To The Sun", "A music album by Rikard Sjöblom's Gungfly"),
        //   new HomeStory("http://evilinkrecords.com/wp-content/uploads/2016/07/StrangersCover.jpg", "Stranger Heads Prevail", "A music album by Thank You Scientist"),
        //   new HomeStory("https://static.wixstatic.com/media/d6751f_4abd982a7f374044a8c7c249d146427c~mv2.jpg", "Blackbox", "A music album by Major Parkinson")
        // ];
    };
    HomeStoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], HomeStoryProvider);
    return HomeStoryProvider;
}());

//# sourceMappingURL=home-story.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map