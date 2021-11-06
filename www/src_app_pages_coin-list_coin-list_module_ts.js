(self["webpackChunkcrypto_starter_angular"] = self["webpackChunkcrypto_starter_angular"] || []).push([["src_app_pages_coin-list_coin-list_module_ts"],{

/***/ 6633:
/*!*************************************************************!*\
  !*** ./src/app/pages/coin-list/coin-list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoinListPageRoutingModule": () => (/* binding */ CoinListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _coin_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin-list */ 9472);




const routes = [
    {
        path: '',
        component: _coin_list__WEBPACK_IMPORTED_MODULE_0__.CoinListPage,
    }
];
let CoinListPageRoutingModule = class CoinListPageRoutingModule {
};
CoinListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CoinListPageRoutingModule);



/***/ }),

/***/ 7191:
/*!*****************************************************!*\
  !*** ./src/app/pages/coin-list/coin-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoinListPageModule": () => (/* binding */ CoinListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _coin_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin-list */ 9472);
/* harmony import */ var _coin_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coin-list-routing.module */ 6633);
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ 1075);








let CoinListPageModule = class CoinListPageModule {
};
CoinListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _coin_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.CoinListPageRoutingModule,
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_coin_list__WEBPACK_IMPORTED_MODULE_0__.CoinListPage]
    })
], CoinListPageModule);



/***/ }),

/***/ 9472:
/*!**********************************************!*\
  !*** ./src/app/pages/coin-list/coin-list.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoinListPage": () => (/* binding */ CoinListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_coin_list_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./coin-list.html */ 2405);
/* harmony import */ var _coin_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coin-list.scss */ 1231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var src_app_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base-page */ 6998);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_providers_coin_service_coin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/coin-service/coin-service */ 653);








let CoinListPage = class CoinListPage extends src_app_base_page__WEBPACK_IMPORTED_MODULE_2__.BasePage {
    constructor(injector, coinService) {
        super(injector);
        this.coinService = coinService;
        this.coins = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        if (this.viewState !== this.ViewState.CONTENT) {
            this.showLoadingView({ showOverlay: false });
            this.loadData();
        }
    }
    loadData() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const data = yield this.coinService.load();
                this.coins = data;
                if ((_a = this.coins) === null || _a === void 0 ? void 0 : _a.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onRefreshComplete();
            }
            catch (_b) {
                this.onRefreshComplete();
                this.showErrorView();
            }
        });
    }
    onReload(event = {}) {
        this.refresher = event.target;
        this.showLoadingView({ showOverlay: false });
        this.loadData();
    }
};
CoinListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector },
    { type: src_app_providers_coin_service_coin_service__WEBPACK_IMPORTED_MODULE_3__.CoinService }
];
CoinListPage.propDecorators = {
    ionContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, { static: true },] }]
};
CoinListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-coin-list',
        template: _raw_loader_coin_list_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('staggerIn', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.stagger)('50ms', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [_coin_list_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoinListPage);



/***/ }),

/***/ 1231:
/*!************************************************!*\
  !*** ./src/app/pages/coin-list/coin-list.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-list {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4tbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJjb2luLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */");

/***/ }),

/***/ 2405:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coin-list/coin-list.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Crypto starter\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [routerLink]=\"['/posts']\">\r\n        <ion-icon name=\"notifications-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"viewState === ViewState.EMPTY\" title=\"No coins found\" icon=\"alert-circle-outline\"></empty-view>\r\n  <empty-view *ngIf=\"viewState === ViewState.ERROR\" title=\"Network error\" icon=\"alert-circle-outline\"></empty-view>\r\n\r\n  <div *ngIf=\"viewState === ViewState.LOADING\">\r\n    <div class=\"skeleton-wrapper\" *ngFor=\"let item of [].constructor(20)\">\r\n      <ion-item color=\"primary\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n        </ion-label>\r\n        <div slot=\"end\">\r\n          <div style=\"width: 40px;\">\r\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-list [@staggerIn]=\"coins?.length\" *ngIf=\"viewState === ViewState.CONTENT\">\r\n    <app-coin *ngFor=\"let coin of coins\" [coin]=\"coin\">\r\n    </app-coin>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coin-list_coin-list_module_ts.js.map