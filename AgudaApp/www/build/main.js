webpackJsonp([1],{

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
		325,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_screen__ = __webpack_require__(294);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entry_screen__["a" /* EntryScreenPage */]),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_info__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_gallery__ = __webpack_require__(48);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\tabs\tabs.html"*/'<ion-tabs class="tabbar_red">\n\n    <ion-tab [root]="homeTab" tabTitle="בית" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="calendarTab" tabTitle="יומן" tabIcon="calendar"></ion-tab>\n\n    <ion-tab [root]="galleryTab" tabTitle="גלריה" tabIcon="images"></ion-tab>\n\n    <ion-tab [root]="infoTab" tabTitle="מידע" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_homeData_model__ = __webpack_require__(295);
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

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-admin-panel',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\admin-panel\admin-panel.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>adminPanel</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\admin-panel\admin-panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminPanelPage);
    return AdminPanelPage;
}());

//# sourceMappingURL=admin-panel.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_admin_panel_admin_panel__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_firebase_config__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_info__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_gallery_gallery__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_refresh_refresh__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_components_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_entry_screen_entry_screen_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_home_data_home_data__ = __webpack_require__(167);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_0__pages_admin_panel_admin_panel__["a" /* AdminPanelPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-login/admin-login.module#AdminLoginPageModule', name: 'aguda-admin', segment: 'adminpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entry-screen/entry-screen.module#EntryScreenPageModule', name: 'EntryScreenPage', segment: 'entry-screen', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_entry_screen_entry_screen_module__["EntryScreenPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_0__pages_admin_panel_admin_panel__["a" /* AdminPanelPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_home_data_home_data__["a" /* HomeDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-entry-screen',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\entry-screen\entry-screen.html"*/'<div class="entryLoader">\n\n    <img id=\'enter\' src="assets/imgs/logo.png">\n\n    <span id=\'overlay\'><i class="fas fa-spinner fa-pulse"></i></span>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\entry-screen\entry-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], EntryScreenPage);
    return EntryScreenPage;
}());

//# sourceMappingURL=entry-screen.js.map

/***/ }),

/***/ 295:
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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entry_screen_entry_screen__ = __webpack_require__(294);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 322:
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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calendar_calendar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_gallery_gallery__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_info_info__ = __webpack_require__(81);
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
            selector: 'refresh',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\components\refresh\refresh.html"*/'<!-- Generated template for the RefreshComponent component -->\n\n<button (click)="doRefresh();">\n\n    <i class="fas fa-sync"></i>\n\n</button>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\components\refresh\refresh.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_3__pages_calendar_calendar__["a" /* CalendarPage */], __WEBPACK_IMPORTED_MODULE_4__pages_gallery_gallery__["a" /* GalleryPage */], __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */]])
    ], RefreshComponent);
    return RefreshComponent;
}());

//# sourceMappingURL=refresh.js.map

/***/ }),

/***/ 324:
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

/***/ 327:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\chana\\Desktop\\SE\\AgudaJce\\AgudaApp\\src\\providers\\calendar-event\\calendar-event.js'");

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-gallery',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\gallery\gallery.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-row justify-content-center *ngFor="let album of albumArray;">\n\n        <ion-card (click) = "callAlbum(album.content)">\n\n            <img src="https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg"/>\n\n            <div class="card-title">{{album.headline}}</div>\n\n            <div class="card-subtitle">{{album.content}}</div>\n\n        </ion-card>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\gallery\gallery.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _c || Object])
    ], GalleryPage);
    return GalleryPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\info\info.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\info\info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_home_data_home_data__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <main>\n\n        <h1>\n\n            {{ title }}\n\n        </h1>\n\n        <img src="assets/imgs/logo.png" width="200" height="200">\n\n        <hr>\n\n        <ion-row justify-content-center *ngFor="let post of postsService.posts; let i = index;">\n\n            <ion-card id="postCard_{{i}}" [ngClass]="browserSize">\n\n                <img src={{post.imageURL}}/>\n\n                <ion-card-content text-wrap>\n\n                    <ion-card-title text-wrap>\n\n                        {{post.headline}}\n\n                    </ion-card-title>\n\n                    <p>\n\n                        {{post.content}}\n\n                    </p>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-row>\n\n    </main>\n\n</ion-content>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0__providers_home_data_home_data__["a" /* HomeDataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\calendar\calendar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{tabName}}\n\n            <refresh id={{refresh_id}}></refresh>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list *ngFor="let post of calendarProvider.posts">\n\n        <ion-item-sliding>\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                    <img *ngIf="post.imageURL != \'\'; else elsetag" src={{post.imageURL}}>\n\n                    <ng-template #elsetag>\n\n                        <img src="assets/imgs/logo.png">\n\n                    </ng-template>\n\n                </ion-thumbnail>\n\n                <h2>{{post.date.toLocaleString(\'he-IL\',dateOptions)}}</h2>\n\n                <p>{{post.headline}}</p>\n\n            </ion-item>\n\n            <ion-item-options side="left" dir="ltr">\n\n                <button ion-button color="light" >\n\n                    <ion-icon name="more"></ion-icon>\n\n                    More\n\n                </button>\n\n                <button ion-button color="primary" >\n\n                    <ion-icon name="text"></ion-icon>\n\n                    הוסף ליומן\n\n                </button>\n\n            </ion-item-options>\n\n            \n\n        </ion-item-sliding>\n\n     </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__["CalendarEventProvider"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_calendar_event_calendar_event__["CalendarEventProvider"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]) === "function" && _d || Object])
    ], CalendarPage);
    return CalendarPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map