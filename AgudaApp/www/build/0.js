webpackJsonp([0],{

<<<<<<< HEAD
/***/ 325:
=======
/***/ 327:
>>>>>>> 8264e0a3fc264ec3635538181a1d6c144d1508a2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginPageModule", function() { return AdminLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_login__ = __webpack_require__(326);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_login__ = __webpack_require__(328);
>>>>>>> 8264e0a3fc264ec3635538181a1d6c144d1508a2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminLoginPageModule = /** @class */ (function () {
    function AdminLoginPageModule() {
    }
    AdminLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_login__["a" /* AdminLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_login__["a" /* AdminLoginPage */]),
            ],
        })
    ], AdminLoginPageModule);
    return AdminLoginPageModule;
}());

//# sourceMappingURL=admin-login.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 326:
=======
/***/ 328:
>>>>>>> 8264e0a3fc264ec3635538181a1d6c144d1508a2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_panel_admin_panel__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(212);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_panel_admin_panel__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(214);
>>>>>>> 8264e0a3fc264ec3635538181a1d6c144d1508a2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AdminLoginPage = /** @class */ (function () {
    function AdminLoginPage(navCtrl, navParams, afAuth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
    }
    AdminLoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader, res_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('verify name and password....');
                        loader = this.loadingCtrl.create();
                        loader.present();
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)];
                    case 1:
                        res_1 = _a.sent();
                        console.log(res_1);
                        loader.dismiss().then(function () {
                            console.log('uid: ' + res_1.uid);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__admin_panel_admin_panel__["a" /* AdminPanelPage */]);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        loader.dismiss().then(function () {
                            var load2 = _this.loadingCtrl.create({
                                content: e_1.message,
                                spinner: 'text only',
                                duration: 3000,
                                cssClass: 'customLoad'
                            });
                            load2.present();
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdminLoginPage.prototype.forgotPassword = function () {
    };
    AdminLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminLoginPage');
    };
    AdminLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-admin-login',template:/*ion-inline-start:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\admin-login\admin-login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title text-center>Login</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding dir=\'ltr\'>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email" name="email" required="required"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input [(ngModel)]="password" type="password" name="password" required="required"></ion-input>\n\n        </ion-item>\n\n\n\n        <div padding text-center>\n\n            <button *ngIf="email && password " ion-button color="dark" round (click)="login()">Login</button>\n\n            <!-- Show dead button if form is not filled -->\n\n            <button *ngIf="!email || !password" ion-button color="darkGray" round>Login</button>\n\n        </div>\n\n\n\n    </ion-list>\n\n\n\n    <br/>\n\n    <div padding text-center>\n\n        <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\chana\Desktop\SE\AgudaJce\AgudaApp\src\pages\admin-login\admin-login.html"*/,
=======
            selector: 'page-admin-login',template:/*ion-inline-start:"/Users/eliyahweinberg/Public/SE-project/AgudaJce/AgudaApp/src/pages/admin-login/admin-login.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title text-center>Login</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding dir=\'ltr\'>\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input [(ngModel)]="email" type="email" name="email" required="required"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input [(ngModel)]="password" type="password" name="password" required="required"></ion-input>\n        </ion-item>\n\n        <div padding text-center>\n            <button *ngIf="email && password " ion-button color="dark" round (click)="login()">Login</button>\n            <!-- Show dead button if form is not filled -->\n            <button *ngIf="!email || !password" ion-button color="darkGray" round>Login</button>\n        </div>\n\n    </ion-list>\n\n    <br/>\n    <div padding text-center>\n        <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eliyahweinberg/Public/SE-project/AgudaJce/AgudaApp/src/pages/admin-login/admin-login.html"*/,
>>>>>>> 8264e0a3fc264ec3635538181a1d6c144d1508a2
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AdminLoginPage);
    return AdminLoginPage;
}());

//# sourceMappingURL=admin-login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map