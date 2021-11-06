(self["webpackChunkcrypto_starter_angular"] = self["webpackChunkcrypto_starter_angular"] || []).push([["default-src_app_base-page_ts-src_app_shared_module_ts"],{

/***/ 6998:
/*!******************************!*\
  !*** ./src/app/base-page.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePage": () => (/* binding */ BasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _enums_ViewState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/ViewState */ 2272);





class BasePage {
    constructor(injector) {
        this.ViewState = _enums_ViewState__WEBPACK_IMPORTED_MODULE_0__.ViewState;
        this.loadingCtrl = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController);
        this.toastCtrl = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController);
        this.alertCtrl = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController);
        this.navCtrl = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController);
        this.navParams = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
        this.menuCtrl = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.MenuController);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
        this.activatedRoute = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
        this.title = injector.get(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title);
    }
    setPageTitle(title) {
        this.title.setTitle(title);
    }
    showLoadingView(params) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (params.showOverlay) {
                this.loader = yield this.loadingCtrl.create({
                    message: 'Loading...'
                });
                return yield this.loader.present();
            }
            else {
                this.viewState = _enums_ViewState__WEBPACK_IMPORTED_MODULE_0__.ViewState.LOADING;
            }
            return true;
        });
    }
    dismissLoadingView() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loader)
                return;
            try {
                yield this.loader.dismiss();
            }
            catch (error) {
                console.log('ERROR: LoadingController dismiss', error);
            }
        });
    }
    showContentView() {
        this.viewState = _enums_ViewState__WEBPACK_IMPORTED_MODULE_0__.ViewState.CONTENT;
        this.dismissLoadingView();
    }
    showEmptyView() {
        this.viewState = _enums_ViewState__WEBPACK_IMPORTED_MODULE_0__.ViewState.EMPTY;
        this.dismissLoadingView();
    }
    showErrorView() {
        this.viewState = _enums_ViewState__WEBPACK_IMPORTED_MODULE_0__.ViewState.ERROR;
        this.dismissLoadingView();
    }
    onRefreshComplete(data = null) {
        if (this.refresher) {
            this.refresher.disabled = true;
            this.refresher.complete();
            setTimeout(() => {
                this.refresher.disabled = false;
            }, 100);
        }
        if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (data && data.length === 0) {
                this.infiniteScroll.disabled = true;
            }
            else {
                this.infiniteScroll.disabled = false;
            }
        }
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                color: 'secondary',
                position: 'bottom',
                duration: 3000
            });
            return yield toast.present();
        });
    }
    showAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message: message,
                buttons: [{
                        text: 'Ok',
                        role: ''
                    }]
            });
            return yield alert.present();
        });
    }
    showConfirm(message) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: '',
                message: message,
                buttons: [{
                        text: 'cancel',
                        role: 'cancel',
                        handler: () => resolve(false)
                    }, {
                        text: 'Ok',
                        handler: () => resolve(true)
                    }]
            });
            confirm.present();
        }));
    }
    navigateTo(page, queryParams = {}) {
        return this.router.navigate([page], {
            queryParams: queryParams
        });
    }
    navigateToRelative(page, queryParams = {}) {
        return this.router.navigate([page], {
            queryParams: queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    setRelativeRoot(page, queryParams = {}) {
        this.navCtrl.setDirection('root', false);
        return this.router.navigate([page], {
            queryParams: queryParams,
            relativeTo: this.activatedRoute
        });
    }
    setRoot(url) {
        return this.navCtrl.navigateRoot(url, {
            animated: true,
            animationDirection: 'forward',
        });
    }
    getRouterParams() {
        return this.activatedRoute.snapshot.data;
    }
    getParams() {
        return this.activatedRoute.snapshot.params;
    }
    getQueryParams() {
        return this.activatedRoute.snapshot.queryParams;
    }
}


/***/ }),

/***/ 4042:
/*!*****************************************!*\
  !*** ./src/app/components/coin/coin.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoinComponent": () => (/* binding */ CoinComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_coin_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./coin.html */ 2139);
/* harmony import */ var _coin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coin.scss */ 5446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let CoinComponent = class CoinComponent {
    constructor() { }
    ngOnInit() {
        const symbol = this.coin.symbol.toLowerCase();
        this.imageUrl = `https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/128/icon/${symbol}.png`;
    }
};
CoinComponent.ctorParameters = () => [];
CoinComponent.propDecorators = {
    coin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CoinComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-coin',
        template: _raw_loader_coin_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coin_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoinComponent);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _coin_coin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin/coin */ 4042);
/* harmony import */ var ngx_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl */ 8332);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _coin_coin__WEBPACK_IMPORTED_MODULE_0__.CoinComponent,
        ],
        entryComponents: [
            _coin_coin__WEBPACK_IMPORTED_MODULE_0__.CoinComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            ngx_intl__WEBPACK_IMPORTED_MODULE_6__.NgxIntlModule,
        ],
        exports: [
            _coin_coin__WEBPACK_IMPORTED_MODULE_0__.CoinComponent,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 3197:
/*!************************************************************!*\
  !*** ./src/app/components/empty-view/empty-view.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyViewModule": () => (/* binding */ EmptyViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _empty_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-view */ 1920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





let EmptyViewModule = class EmptyViewModule {
};
EmptyViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _empty_view__WEBPACK_IMPORTED_MODULE_0__.EmptyView,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        exports: [
            _empty_view__WEBPACK_IMPORTED_MODULE_0__.EmptyView
        ]
    })
], EmptyViewModule);



/***/ }),

/***/ 1920:
/*!*****************************************************!*\
  !*** ./src/app/components/empty-view/empty-view.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyView": () => (/* binding */ EmptyView)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_empty_view_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./empty-view.html */ 1235);
/* harmony import */ var _empty_view_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-view.scss */ 603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let EmptyView = class EmptyView {
    constructor() {
        this.title = '';
        this.text = '';
        this.icon = 'alert-circle-outline';
    }
};
EmptyView.ctorParameters = () => [];
EmptyView.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
EmptyView = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'empty-view',
        template: _raw_loader_empty_view_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_empty_view_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmptyView);



/***/ }),

/***/ 2272:
/*!************************************!*\
  !*** ./src/app/enums/ViewState.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewState": () => (/* binding */ ViewState)
/* harmony export */ });
var ViewState;
(function (ViewState) {
    ViewState["INITIAL"] = "INITIAL";
    ViewState["LOADING"] = "LOADING";
    ViewState["ERROR"] = "ERROR";
    ViewState["EMPTY"] = "EMPTY";
    ViewState["CONTENT"] = "CONTENT";
})(ViewState || (ViewState = {}));


/***/ }),

/***/ 1075:
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _components_empty_view_empty_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/empty-view/empty-view.module */ 3197);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.module */ 5642);
/* harmony import */ var ngx_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl */ 8332);







let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _components_empty_view_empty_view_module__WEBPACK_IMPORTED_MODULE_0__.EmptyViewModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            ngx_intl__WEBPACK_IMPORTED_MODULE_6__.NgxIntlModule,
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _components_empty_view_empty_view_module__WEBPACK_IMPORTED_MODULE_0__.EmptyViewModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            ngx_intl__WEBPACK_IMPORTED_MODULE_6__.NgxIntlModule,
        ],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ 5446:
/*!*******************************************!*\
  !*** ./src/app/components/coin/coin.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  display: block;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-avatar {\n  min-width: 25px !important;\n  min-height: 25px !important;\n  background: white;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiY29pbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgbWluLXdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 603:
/*!*******************************************************!*\
  !*** ./src/app/components/empty-view/empty-view.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container h5 {\n  font-size: 24px;\n  font-weight: bold;\n}\n.container p {\n  font-size: 11px;\n  font-weight: bold;\n  opacity: 0.3;\n  margin: 0;\n}\n.container ion-icon {\n  font-size: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0FBSEoiLCJmaWxlIjoiZW1wdHktdmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2139:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/coin/coin.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item button color=\"primary\" [detail]=\"false\" [routerLink]=\"['./' + this.coin.id]\">\r\n  <ion-avatar slot=\"start\">\r\n    <ion-img [src]=\"coin.image\" [alt]=\"coin.name\"></ion-img>\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2 class=\"bold\">\r\n      <ion-text color=\"light\">\r\n        {{ coin.name }}\r\n      </ion-text>\r\n    </h2>\r\n  </ion-label>\r\n  <div slot=\"end\">\r\n    <p class=\"bold\">\r\n      {{ coin.current_price | intlNumber: { style: 'currency', currency: 'USD', maximumFractionDigits: 8 } }}\r\n    </p>\r\n  </div>\r\n</ion-item>");

/***/ }),

/***/ 1235:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empty-view/empty-view.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"flex flex-col full-height align-items-center p-md ion-text-center justify-content-center\">\r\n  <ion-icon [name]=\"icon\" color=\"light\"></ion-icon>\r\n  <h5 [innerHTML]=\"title\" *ngIf=\"title\"></h5>\r\n  <p [innerHTML]=\"text\" *ngIf=\"text\"></p>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_base-page_ts-src_app_shared_module_ts.js.map