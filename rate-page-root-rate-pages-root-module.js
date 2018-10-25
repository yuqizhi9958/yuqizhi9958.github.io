(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rate-page-root-rate-pages-root-module"],{

/***/ "./src/app/pages/rate-page-root/rate-page-root.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/rate-page-root/rate-page-root.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <p class=\"title\">当前位置：<a routerLink=\"/\">费率</a>{{name}}</p>\n <div class=\"tabs-box\">\n    <a>费率表</a>\n </div>\n <router-outlet></router-outlet>\n \n</div>\n"

/***/ }),

/***/ "./src/app/pages/rate-page-root/rate-page-root.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/rate-page-root/rate-page-root.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  box-sizing: border-box;\n  width: 100%;\n  background-color: #f8f9fb;\n  padding: 33px 68px 0 68px; }\n  .content .title {\n    font-size: 14px;\n    color: #37394c; }\n  .content .tabs-box {\n    width: 100%;\n    height: 32px;\n    margin-top: 17px;\n    border-bottom: 3px solid #d5d5d5;\n    position: relative; }\n  .content .tabs-box a {\n      display: inline-block;\n      width: 134px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0px;\n      text-align: center;\n      font-size: 20px;\n      color: #1d9ff7;\n      border-bottom: 3px solid #1d9ff7; }\n"

/***/ }),

/***/ "./src/app/pages/rate-page-root/rate-page-root.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/rate-page-root/rate-page-root.component.ts ***!
  \******************************************************************/
/*! exports provided: RatePageRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePageRootComponent", function() { return RatePageRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatePageRootComponent = /** @class */ (function () {
    function RatePageRootComponent(router) {
        this.router = router;
    }
    RatePageRootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.display();
        this.router.events.subscribe(function (event) {
            // console.log(event);
            //可以用instanceof来判断事件的类型，然后去做你想要做的事情
            // console.log(event instanceof NavigationStart);
            // console.log('123');
            _this.display();
        });
    };
    RatePageRootComponent.prototype.display = function () {
        this.url = window.location.href;
        if (this.url.indexOf("add-rate") != -1) {
            this.name = " > 设置费率表";
        }
        else {
            this.name = "";
        }
    };
    RatePageRootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-rate-page-root",
            template: __webpack_require__(/*! ./rate-page-root.component.html */ "./src/app/pages/rate-page-root/rate-page-root.component.html"),
            styles: [__webpack_require__(/*! ./rate-page-root.component.scss */ "./src/app/pages/rate-page-root/rate-page-root.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RatePageRootComponent);
    return RatePageRootComponent;
}());



/***/ }),

/***/ "./src/app/pages/rate-page-root/rate-pages-root-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/rate-page-root/rate-pages-root-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RatePagesRootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePagesRootRoutingModule", function() { return RatePagesRootRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rate_page_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-page-root.component */ "./src/app/pages/rate-page-root/rate-page-root.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _rate_page_root_component__WEBPACK_IMPORTED_MODULE_2__["RatePageRootComponent"],
        children: [
            {
                path: 'schedule-of-rates',
                loadChildren: './schedule-of-rates/schedule-of-rates.module#ScheduleOfRatesModule'
            },
            {
                path: '',
                redirectTo: 'schedule-of-rates',
                pathMatch: 'full'
            }
        ]
    }
];
var RatePagesRootRoutingModule = /** @class */ (function () {
    function RatePagesRootRoutingModule() {
    }
    RatePagesRootRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RatePagesRootRoutingModule);
    return RatePagesRootRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/rate-page-root/rate-pages-root.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/rate-page-root/rate-pages-root.module.ts ***!
  \****************************************************************/
/*! exports provided: RatePagesRootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePagesRootModule", function() { return RatePagesRootModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rate_page_root_rate_pages_root_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rate-page-root/rate-pages-root-routing.module */ "./src/app/pages/rate-page-root/rate-pages-root-routing.module.ts");
/* harmony import */ var _schedule_of_rates_schedule_of_rates_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-of-rates/schedule-of-rates.module */ "./src/app/pages/rate-page-root/schedule-of-rates/schedule-of-rates.module.ts");
/* harmony import */ var _rate_page_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rate-page-root.component */ "./src/app/pages/rate-page-root/rate-page-root.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RatePagesRootModule = /** @class */ (function () {
    function RatePagesRootModule() {
    }
    RatePagesRootModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _rate_page_root_rate_pages_root_routing_module__WEBPACK_IMPORTED_MODULE_2__["RatePagesRootRoutingModule"],
                _schedule_of_rates_schedule_of_rates_module__WEBPACK_IMPORTED_MODULE_3__["ScheduleOfRatesModule"]
            ],
            declarations: [_rate_page_root_component__WEBPACK_IMPORTED_MODULE_4__["RatePageRootComponent"]]
        })
    ], RatePagesRootModule);
    return RatePagesRootModule;
}());



/***/ })

}]);
//# sourceMappingURL=rate-page-root-rate-pages-root-module.js.map