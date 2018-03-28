webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-5\">\n <h1>Compie Test Angular 5</h1>\n  <!--Start-->\n  <app-googlemap></app-googlemap>\n  <!--End-->\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__googlemap_googlemap_component__ = __webpack_require__("./src/app/googlemap/googlemap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_geoautocomplete__ = __webpack_require__("./node_modules/ng4-geoautocomplete/index.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__googlemap_googlemap_component__["a" /* GooglemapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/googlemap/googlemap.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/googlemap/googlemap.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4geo-autocomplete [userSettings]=\"userSettings\"\n                     (componentCallback)=\"autoCompleteCallback1($event)\"></ng4geo-autocomplete>\n\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th scope=\"col\">Company</th>\n    <th scope=\"col\">Branch</th>\n    <th scope=\"col\">latitude</th>\n    <th scope=\"col\">langitude</th>\n    <th scope=\"col\" *ngIf=\"isChosed\">Distance</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let company of companies\">\n    <td>{{company.company}}</td>\n    <td>{{company.branche}}</td>\n    <td>{{company.lat}}</td>\n    <td>{{company.lng}}</td>\n    <td *ngIf=\"isChosed\">{{company.distance}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/googlemap/googlemap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglemapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_companies__ = __webpack_require__("./src/app/mock-companies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GooglemapComponent = /** @class */ (function () {
    function GooglemapComponent() {
        this.companies = __WEBPACK_IMPORTED_MODULE_1__mock_companies__["a" /* COMPANIES */];
        this.userSettings = {};
        this.isChosed = false;
    }
    GooglemapComponent.prototype.autoCompleteCallback1 = function (selectedData) {
        this.isChosed = true;
        console.log(selectedData);
        console.log(selectedData.data.geometry.location);
        // console.log(selectedData.data.geometry.location.lat);
        var lat1 = selectedData.data.geometry.location.lat;
        var lon1 = selectedData.data.geometry.location.lng;
        // console.log(lat1, lon1);
        // this.companies.forEach((company) => {
        //   console.log(company);
        //   let lat2 = company.lat;
        //   let lon2 = company.lng;
        //   console.log(this.distance(lat1, lon1, lat2, lon2, 'K'));
        //   let dist = this.distance(lat1, lon1, lat2, lon2, 'K');
        //   this.companies[company].distance = dist;
        // });
        for (var i = 0; i < this.companies.length; i++) {
            var lat2 = this.companies[i].lat;
            var lon2 = this.companies[i].lng;
            this.companies[i].distance = Math.round(this.distance(lat1, lon1, lat2, lon2, 'K'));
            console.log(this.companies[i]);
        }
        // this.distance(lat1, lon1, this.companies., lon2);
    };
    GooglemapComponent.prototype.ngOnInit = function () {
    };
    GooglemapComponent.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var radlon1 = Math.PI * lon1 / 180;
        var radlon2 = Math.PI * lon2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == 'K') {
            dist = dist * 1.609344;
        }
        if (unit == 'N') {
            dist = dist * 0.8684;
        }
        return dist;
    };
    GooglemapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-googlemap',
            template: __webpack_require__("./src/app/googlemap/googlemap.component.html"),
            styles: [__webpack_require__("./src/app/googlemap/googlemap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GooglemapComponent);
    return GooglemapComponent;
}());



/***/ }),

/***/ "./src/app/mock-companies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPANIES; });
var COMPANIES = [
    { company: 'Shufersal', branche: 'Haifa 1', lat: 32.814424, lng: 34.983941, distance: 0 },
    { company: 'Shufersal', branche: 'Haifa 2', lat: 32.816574, lng: 34.971150, distance: 0 },
    { company: 'Shufersal', branche: 'haifa 3', lat: 32.805842, lng: 34.964029, distance: 0 },
    { company: 'Shufersal', branche: 'haifa 4', lat: 32.814454, lng: 34.984941, distance: 0 },
    { company: 'Decatlon', branche: 'Haifa 1', lat: 32.815624, lng: 34.985241, distance: 0 },
    { company: 'Decatlon', branche: 'Haifa 2', lat: 32.811174, lng: 34.971150, distance: 0 },
    { company: 'Decatlon', branche: 'haifa 3', lat: 32.805323, lng: 34.964231, distance: 0 },
    { company: 'Decatlon', branche: 'haifa 4', lat: 32.813444, lng: 34.984921, distance: 0 },
    { company: 'Esh', branche: 'Haifa 1', lat: 32.814424, lng: 34.983941, distance: 0 },
    { company: 'Esh', branche: 'Haifa 2', lat: 32.816640, lng: 34.971158, distance: 0 },
    { company: 'Esh', branche: 'haifa 3', lat: 32.805987, lng: 34.964917, distance: 0 },
    { company: 'Esh', branche: 'haifa 4', lat: 32.814654, lng: 34.984564, distance: 0 },
    { company: 'Mega', branche: 'Haifa 1', lat: 32.814244, lng: 34.983141, distance: 0 },
    { company: 'Mega', branche: 'Haifa 2', lat: 32.813174, lng: 34.972530, distance: 0 },
    { company: 'Mega', branche: 'haifa 3', lat: 32.805812, lng: 34.963329, distance: 0 },
    { company: 'Mega', branche: 'haifa 4', lat: 32.813254, lng: 34.984441, distance: 0 },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map