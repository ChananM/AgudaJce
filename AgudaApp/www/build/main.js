webpackJsonp([5],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-login/admin-login.module": [
		328,
		0
	],
	"../pages/entry-screen/entry-screen.module": [
		165
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryScreenPageModule", function() { return EntryScreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_screen__ = __webpack_require__(166);
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], EntryScreenPage);
    return EntryScreenPage;
}());

//# sourceMappingURL=entry-screen.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_info__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_gallery__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(83);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_homeData_model__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HomeDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HomeDataProvider = /** @class */ (function () {
    function HomeDataProvider() {
        this.posts = [];
    }
    HomeDataProvider.prototype.load = function () {
        this.posts = [
            new __WEBPACK_IMPORTED_MODULE_0__models_homeData_model__["a" /* HomeData */]("http://www.nuclearblast.de/static/articles/260/260672.jpg/1000x1000.jpg", "On Her Journey To The Sun", "A music album by Rikard Sjöblom's Gungfly"),
            new __WEBPACK_IMPORTED_MODULE_0__models_homeData_model__["a" /* HomeData */]("http://evilinkrecords.com/wp-content/uploads/2016/07/StrangersCover.jpg", "Stranger Heads Prevail", "A music album by Thank You Scientist"),
            new __WEBPACK_IMPORTED_MODULE_0__models_homeData_model__["a" /* HomeData */]("https://static.wixstatic.com/media/d6751f_4abd982a7f374044a8c7c249d146427c~mv2.jpg", "Blackbox", "A music album by Major Parkinson")
        ];
    };
    HomeDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HomeDataProvider);
    return HomeDataProvider;
}());

//# sourceMappingURL=home-data.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_calendarEvent_model__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function CalendarEventProvider() {
        this.posts = [];
    }
    CalendarEventProvider.prototype.load = function () {
        this.posts = [
            new __WEBPACK_IMPORTED_MODULE_0__models_calendarEvent_model__["a" /* CalendarEvent */]("", this.isoToDate("2018-04-24"), "Test", "האירוע המטריף של הקיץ - בדיקת אפליקציות", false),
            new __WEBPACK_IMPORTED_MODULE_0__models_calendarEvent_model__["a" /* CalendarEvent */]("https://s-i.huffpost.com/gen/1842880/images/n-NIGHTCLUB-628x314.jpg", this.isoToDate("2018-03-10"), "מסיבה", "בלה-בלה-בלה,לה-לה-לה", false),
            new __WEBPACK_IMPORTED_MODULE_0__models_calendarEvent_model__["a" /* CalendarEvent */]("https://c.wallhere.com/photos/90/73/disco_club_dance_hands-723564.jpg!d", this.isoToDate("2018-04-24"), "Test3", "Let's test our calendar event", false)
        ];
    };
    CalendarEventProvider.prototype.isoToDate = function (dateStr) {
        return new Date(dateStr);
    };
    CalendarEventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CalendarEventProvider);
    return CalendarEventProvider;
}());

//# sourceMappingURL=calendar-event.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    function AdminPanelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminPanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPanelPage');
    };
    AdminPanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-panel',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\admin-panel.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>adminPanel</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-panel\admin-panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminPanelPage);
    return AdminPanelPage;
}());

//# sourceMappingURL=admin-panel.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_info_tabs_info_tabs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_admin_panel_admin_panel__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_firebase_config__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_info_info__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_calendar_calendar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_gallery_gallery__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_refresh_refresh__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_components_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_entry_screen_entry_screen_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_home_data_home_data__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_calendar_event_calendar_event__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_info_tabs_contact_contact__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_info_tabs_dep_info_dep_info__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_info_tabs_faq_faq__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_info_tabs_about_about__ = __webpack_require__(334);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_1__pages_admin_panel_admin_panel__["a" /* AdminPanelPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_info_tabs_info_tabs__["a" /* InfoTabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_info_tabs_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_info_tabs_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_info_tabs_dep_info_dep_info__["a" /* DepInfoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_info_tabs_faq_faq__["a" /* FaqPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-login/admin-login.module#AdminLoginPageModule', name: 'aguda-admin', segment: 'adminpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entry-screen/entry-screen.module#EntryScreenPageModule', name: 'EntryScreenPage', segment: 'entry-screen', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_18__pages_entry_screen_entry_screen_module__["EntryScreenPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_1__pages_admin_panel_admin_panel__["a" /* AdminPanelPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_info_tabs_info_tabs__["a" /* InfoTabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_info_tabs_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_info_tabs_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_info_tabs_dep_info_dep_info__["a" /* DepInfoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_info_tabs_faq_faq__["a" /* FaqPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_home_data_home_data__["a" /* HomeDataProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_calendar_event_calendar_event__["a" /* CalendarEventProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_faq__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dep_info_dep_info__ = __webpack_require__(336);
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
            selector: 'page-info-tabs',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\info-tabs.html"*/'<ion-tabs tabsPlacement="top" class="infoTabsUp">\n    <ion-tab [root]="aboutRoot" tabTitle="אודות" ></ion-tab>\n    <ion-tab [root]="faqRoot" tabTitle="שאלות ותשובות" tabIcon="help"></ion-tab>\n    <ion-tab [root]="contactRoot" tabTitle="צור קשר" ></ion-tab>\n    <ion-tab [root]="depInfoRoot" tabTitle="מידע כללי" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\info-tabs.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object])
    ], InfoTabsPage);
    return InfoTabsPage;
    var _a;
}());

//# sourceMappingURL=info-tabs.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeData; });
var HomeData = /** @class */ (function () {
    function HomeData(imageURL, headline, content) {
        this.imageURL = imageURL;
        this.headline = headline;
        this.content = content;
    }
    return HomeData;
}());

//# sourceMappingURL=homeData.model.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEvent; });
var CalendarEvent = /** @class */ (function () {
    function CalendarEvent(imageURL, date, headline, content, open) {
        this.imageURL = imageURL;
        this.date = date;
        this.headline = headline;
        this.content = content;
        this.open = open;
    }
    return CalendarEvent;
}());

//# sourceMappingURL=calendarEvent.model.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entry_screen_entry_screen__ = __webpack_require__(166);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 325:
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

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calendar_calendar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_gallery_gallery__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_info_info__ = __webpack_require__(80);
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

/***/ 327:
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>contact</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], ContactPage);
    return ContactPage;
    var _a, _b;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-dep-info',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\dep-info\dep-info.html"*/'<!--\n  Generated template for the DepInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>depInfo</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\dep-info\dep-info.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], DepInfoPage);
    return DepInfoPage;
    var _a, _b;
}());

//# sourceMappingURL=dep-info.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\faq\faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>faq</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info-tabs\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], FaqPage);
    return FaqPage;
    var _a, _b;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info\info.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n<page-info-tabs></page-info-tabs>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\info\info.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _b || Object])
    ], InfoPage);
    return InfoPage;
    var _a, _b;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_home_data_home_data__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_0__providers_home_data_home_data__["a" /* HomeDataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    function GalleryPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.tabName = 'גלריה';
        this.refresh_id = 'gallRef';
        this.albumArray = [
            { headline: "USA", content: "51 states", imageUrl: "blablabla" },
            { headline: "Canada", content: "3 states" },
            { headline: "Israel", content: "1 states" }
        ];
    }
    GalleryPage.prototype.ionViewDidEnter = function () {
        this.events.publish('tab', this.tabName, this.refresh_id);
        this.doRefresh();
    };
    GalleryPage.prototype.doRefresh = function () {
        console.log("galery refresh");
    };
    GalleryPage.prototype.callAlbum = function (text) {
        alert(text);
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\gallery\gallery.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-row justify-content-center *ngFor="let album of albumArray;">\n\n        <ion-card (click) = "callAlbum(album.content)">\n\n            <img src="https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg"/>\n\n            <div class="card-title">{{album.headline}}</div>\n\n            <div class="card-subtitle">{{album.content}}</div>\n\n        </ion-card>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\gallery\gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\calendar\calendar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list *ngFor="let post of calendarProvider.posts; let i = index">\n\n        <ion-item-sliding>\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                    <img *ngIf="post.imageURL != \'\'; else elsetag" src={{post.imageURL}}>\n\n                    <ng-template #elsetag>\n\n                        <img src="assets/imgs/logo.png">\n\n                    </ng-template>\n\n                </ion-thumbnail>\n\n                <h2>{{post.headline}}</h2>\n\n                <p>{{post.date.toLocaleString(\'he-IL\',dateOptions)}}</p>\n\n                <button ion-button clear item-end (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': post.open, \'section\': !post.open}">\n\n                    <ion-icon item-left name="arrow-dropdown-circle" *ngIf="!post.open"></ion-icon>\n\n                    <ion-icon item-left name="arrow-dropup-circle" *ngIf="post.open"></ion-icon>\n\n                </button>\n\n            </ion-item>\n\n            <ion-item-options side="left" dir="ltr">\n\n                <button ion-button color="primary" (click)="addToPlatformCalendar(i)">\n\n                    <ion-icon name="add"></ion-icon>\n\n                    ללוח שנה\n\n                </button>\n\n            </ion-item-options>\n\n            <ion-item *ngIf="post.open">\n\n                <p>{{post.content}}</p>\n\n            </ion-item>\n\n            \n\n        </ion-item-sliding>\n\n     </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__["a" /* CalendarEventProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map