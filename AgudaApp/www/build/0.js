webpackJsonp([0],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginPageModule", function() { return AdminLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_login__ = __webpack_require__(334);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_login__["a" /* AdminLoginPage */]),
            ],
        })
    ], AdminLoginPageModule);
    return AdminLoginPageModule;
}());

//# sourceMappingURL=admin-login.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_panel_admin_panel__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(219);
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
    function AdminLoginPage(navCtrl, navParams, afAuth, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
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
                            var alert = _this.alertCtrl.create({
                                title: 'Login Failed',
                                message: e_1.message,
                                buttons: ['OK']
                            });
                            alert.present();
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdminLoginPage.prototype.forgotPassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'alertClass',
            title: 'Password Recovery',
            subTitle: 'Enter your Email address',
            inputs: [
                {
                    name: 'emailAddress',
                    type: 'email',
                    placeholder: 'Email',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        console.log(data.emailAddress);
                        var toastOpt = {
                            message: '',
                            duration: 3000,
                            cssClass: 'toastClass',
                            position: 'middle'
                        };
                        _this.afAuth.auth.sendPasswordResetEmail(data.emailAddress)
                            .then(function () {
                            toastOpt.message = 'Mail with steps about password recovery was sent to you';
                        })
                            .catch(function (err) {
                            toastOpt.message = err.message;
                        });
                        _this.toastCtrl.create(toastOpt).present();
                    }
                }
            ]
        });
        alert.present();
    };
    AdminLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminLoginPage');
    };
    AdminLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-login',template:/*ion-inline-start:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-login\admin-login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title text-center>Login</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding dir=\'ltr\'>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email" name="email" required="required"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input [(ngModel)]="password" type="password" name="password" required="required"></ion-input>\n\n        </ion-item>\n\n\n\n        <div padding text-center>\n\n            <button *ngIf="email && password " ion-button color="dark" round (click)="login()">Login</button>\n\n            <!-- Show dead button if form is not filled -->\n\n            <button *ngIf="!email || !password" ion-button color="darkGray" round>Login</button>\n\n        </div>\n\n\n\n    </ion-list>\n\n\n\n    <br/>\n\n    <div padding text-center>\n\n        <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\OdeliaAbginehsaz\Desktop\proj\AgudaJce\AgudaApp\src\pages\admin-login\admin-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AdminLoginPage);
    return AdminLoginPage;
}());

//# sourceMappingURL=admin-login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map