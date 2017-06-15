webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(172);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateStringPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncateStringPipe = (function () {
    function TruncateStringPipe() {
    }
    TruncateStringPipe.prototype.transform = function (value, howMany) {
        if (value.length >= 600) {
            return value.substring(0, 600) + "...";
        }
        else {
            return value;
        }
    };
    return TruncateStringPipe;
}());
TruncateStringPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'truncate' })
], TruncateStringPipe);

//# sourceMappingURL=truncate-string.pipe.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateRoute; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateRoute = (function () {
    function CanActivateRoute(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateRoute.prototype.canActivate = function () {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return CanActivateRoute;
}());
CanActivateRoute = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanActivateRoute);

var _a, _b;
//# sourceMappingURL=singleMovieGuard.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(http, authService) {
        this.http = http;
        this.authService = authService;
        this.title = 'Welcome';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://morning-retreat-68692.herokuapp.com/checkAuth')
            .map(function (data) { return data.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err); })
            .subscribe(function (res) {
            _this.authService.user = res;
            _this.authService.isUser.next(true);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(247),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Directive_dropdown_directive__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pipes_truncate_string_pipe__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__partials_header_header_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__movies_movie_list_movie_list_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__movies_movie_row_movie_row_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_callback_auth_callback_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__movies_single_movie_single_movie_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__movies_user_favorites_user_favorites_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_settings_user_settings_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__movies_search_list_search_list_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Services_singleMovieGuard_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_moviedata_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__movies_movie_list_static_banner_static_banner_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_user_update_user_update_component__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__movies_movie_list_movie_list_component__["a" /* MovieListComponent */] },
    { path: 'search/:searchTerm', component: __WEBPACK_IMPORTED_MODULE_15__movies_search_list_search_list_component__["a" /* SearchListComponent */] },
    { path: 'search/:media_type/:id', component: __WEBPACK_IMPORTED_MODULE_12__movies_single_movie_single_movie_component__["a" /* SingleMovieComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_14__user_user_settings_user_settings_component__["a" /* UserSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__Services_singleMovieGuard_service__["a" /* CanActivateRoute */]] },
    { path: 'user/:id/edit', component: __WEBPACK_IMPORTED_MODULE_20__user_user_update_user_update_component__["a" /* UserUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__Services_singleMovieGuard_service__["a" /* CanActivateRoute */]] },
    { path: ':media_type/:id', component: __WEBPACK_IMPORTED_MODULE_12__movies_single_movie_single_movie_component__["a" /* SingleMovieComponent */] },
    // { path : 'hello', component: HeaderComponent}, 
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_11__auth_callback_auth_callback_component__["a" /* AuthCallbackComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__partials_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__movies_movie_list_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__movies_movie_row_movie_row_component__["a" /* MovieRowComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_callback_auth_callback_component__["a" /* AuthCallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_12__movies_single_movie_single_movie_component__["a" /* SingleMovieComponent */],
            __WEBPACK_IMPORTED_MODULE_13__movies_user_favorites_user_favorites_component__["a" /* UserFavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_user_settings_user_settings_component__["a" /* UserSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__movies_search_list_search_list_component__["a" /* SearchListComponent */],
            __WEBPACK_IMPORTED_MODULE_1__Pipes_truncate_string_pipe__["a" /* TruncateStringPipe */],
            __WEBPACK_IMPORTED_MODULE_0__Directive_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_19__movies_movie_list_static_banner_static_banner_component__["a" /* StaticBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__user_user_update_user_update_component__["a" /* UserUpdateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__Services_moviedata_service__["a" /* MovieDataService */], __WEBPACK_IMPORTED_MODULE_16__Services_authentication_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__Services_singleMovieGuard_service__["a" /* CanActivateRoute */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthCallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthCallbackComponent = (function () {
    function AuthCallbackComponent(http, currentRoute, router) {
        this.http = http;
        this.currentRoute = currentRoute;
        this.router = router;
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
    };
    return AuthCallbackComponent;
}());
AuthCallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-auth-callback',
        template: __webpack_require__(248),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthCallbackComponent);

var _a, _b, _c;
//# sourceMappingURL=auth-callback.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_moviedata_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MovieListComponent = (function () {
    function MovieListComponent(movieData, currentRoute, http, authService) {
        this.movieData = movieData;
        this.currentRoute = currentRoute;
        this.http = http;
        this.authService = authService;
        this.imageUrl = 'https://image.tmdb.org/t/p/w640';
        this.movieListComponent = [
            {
                heading: 'Top Rated Shows',
                type: 'TopShow',
                url: "https://api.themoviedb.org/3/tv/top_rated?api_key=" + __WEBPACK_IMPORTED_MODULE_3__keys__["a" /* Keys */].omdbKey + "&language=en-US&page=1",
                fetchMethodName: this.movieData.getTopRatedShows(),
                media_type: 'tv'
            },
            {
                heading: 'Popular Shows',
                type: 'PopularShow',
                url: "https://api.themoviedb.org/3/tv/popular?api_key=" + __WEBPACK_IMPORTED_MODULE_3__keys__["a" /* Keys */].omdbKey + "&language=en-US&page=1",
                fetchMethodName: this.movieData.getPopularShows(),
                media_type: 'tv'
            },
            {
                heading: 'Airing Today',
                type: 'Today',
                url: "https://api.themoviedb.org/3/tv/airing_today?api_key=" + __WEBPACK_IMPORTED_MODULE_3__keys__["a" /* Keys */].omdbKey + "&language=en-US&page=1",
                fetchMethodName: this.movieData.getTodayShows(),
                media_type: 'tv'
            },
            {
                heading: 'Recently Added Movies',
                type: 'Latest',
                url: "https://api.themoviedb.org/3/movie/now_playing?api_key=" + __WEBPACK_IMPORTED_MODULE_3__keys__["a" /* Keys */].omdbKey + "&language=en-US&page=1",
                fetchMethodName: this.movieData.getLatest(),
                media_type: 'movie'
            },
            {
                heading: 'Popular Movies',
                type: 'Popular',
                url: "https://api.themoviedb.org/3/movie/popular?api_key=" + __WEBPACK_IMPORTED_MODULE_3__keys__["a" /* Keys */].omdbKey + "&language=en-US&page=1",
                fetchMethodName: this.movieData.getPopular(),
                media_type: 'movie'
            }
            // url: `https://api.themoviedb.org/3/movie/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`,
        ];
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    MovieListComponent.prototype.ngAfterViewInit = function () {
        // this.getNewest();
    };
    // getNewest() {
    //   this.http.get(`https://api.themoviedb.org/3/movie/latest?api_key=${Keys.omdbKey}&language=en-US`)
    //     .map(res => res.json())
    //     .subscribe(
    //     (res) => this.latestMovie = res
    //     )
    // }
    MovieListComponent.prototype.checkAuth = function () {
        this.http.get('http://localhost:3000/checkAuth')
            .subscribe(function (res) { return console.log(res); });
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* Component */])({
        selector: 'app-movie-list',
        template: __webpack_require__(249),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_moviedata_service__["a" /* MovieDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_moviedata_service__["a" /* MovieDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__["a" /* AuthService */]) === "function" && _d || Object])
], MovieListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MovieDataService } from './../../../Services/moviedata.service';

var StaticBannerComponent = (function () {
    function StaticBannerComponent(http) {
        this.http = http;
        this.imageUrl = 'https://image.tmdb.org/t/p/w780';
        this.random = Math.round(Math.random() * 18) + 1;
    }
    StaticBannerComponent.prototype.ngOnInit = function () {
        // this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`)
        //          .map(res => res.json())
        //          .subscribe(res => {
        //           this.movie = res.results.filter(movie => {
        //             return movie.backdrop_path != null;
        //           })
        //           console.log(this.movie);
        //          })
    };
    return StaticBannerComponent;
}());
StaticBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-static-banner',
        template: __webpack_require__(250),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StaticBannerComponent);

var _a;
//# sourceMappingURL=static-banner.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_moviedata_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flickity__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flickity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_flickity__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieRowComponent = (function () {
    function MovieRowComponent(http, movieData) {
        this.http = http;
        this.movieData = movieData;
        this.imageUrl = 'https://image.tmdb.org/t/p/w640';
    }
    MovieRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var type = this.movieObj.type;
        var dataFetched = this.movieData[type];
        if (!dataFetched) {
            this.fetchData();
        }
        else {
            this.movies = this.movieObj.fetchMethodName;
            setTimeout(function () { return _this.loadFlickity(_this.index); });
        }
    };
    MovieRowComponent.prototype.fetchData = function () {
        var _this = this;
        // First time load, get data from an outside api
        this.http.get(this.movieObj.url)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            res.results.forEach(function (movie) {
                movie.media_type = _this.movieObj.media_type;
                if (!movie.type) {
                    movie.type = _this.movieObj.type;
                }
            });
            return res;
        })
            .subscribe(function (res) {
            _this.movies = res.results;
            _this.movieData[_this.movieObj.type] = true;
            var newArr = _this.movieData.allMovies.concat(_this.movies);
            _this.movieData.allMovies = newArr;
            setTimeout(function () { return _this.loadFlickity(_this.index); });
        });
    };
    MovieRowComponent.prototype.loadFlickity = function (index) {
        var el = document.querySelectorAll('.carousel')[index];
        // var elem = el[this.index];
        var flkty = new __WEBPACK_IMPORTED_MODULE_3_flickity__(el, {
            // options
            freeScroll: true,
            wrapAround: true,
            initialIndex: 0,
            cellAlign: 'left'
        });
    };
    return MovieRowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MovieRowComponent.prototype, "movieObj", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MovieRowComponent.prototype, "index", void 0);
MovieRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-movie-row',
        template: __webpack_require__(251),
        styles: [__webpack_require__(231)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__Services_moviedata_service__["a" /* MovieDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_moviedata_service__["a" /* MovieDataService */]) === "function" && _b || Object])
], MovieRowComponent);

var _a, _b;
//# sourceMappingURL=movie-row.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchListComponent = (function () {
    function SearchListComponent(http, currentRoute) {
        this.http = http;
        this.currentRoute = currentRoute;
    }
    SearchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRoute
            .params
            .subscribe(function (params) {
            if (params['searchTerm']) {
                var searchTerm = params['searchTerm'];
                _this.searchMovies(searchTerm);
            }
        });
    };
    SearchListComponent.prototype.searchMovies = function (term) {
        var _this = this;
        this.http.get("https://api.themoviedb.org/3/search/multi?api_key=" + __WEBPACK_IMPORTED_MODULE_0__keys__["a" /* Keys */].omdbKey + "&page=1&query=" + term + "&&include_adult=false")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.searchResults = res.results;
        });
    };
    return SearchListComponent;
}());
SearchListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* Component */])({
        selector: 'app-search-list',
        template: __webpack_require__(252),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], SearchListComponent);

var _a, _b;
//# sourceMappingURL=search-list.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_moviedata_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keys__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SingleMovieComponent = (function () {
    function SingleMovieComponent(movieData, currentRoute, router, http, authService, sanitizer) {
        this.movieData = movieData;
        this.currentRoute = currentRoute;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.imageUrl = 'https://image.tmdb.org/t/p/w640';
        this.userLiked = false;
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRoute.params.subscribe(function (params) {
            console.log(params);
            var id = +params['id'];
            _this.id = id;
            _this.checkIfLiked();
            var type = params['media_type'];
            _this.fetchMovieWithAjax(type, id);
            //should only get here if the user types in a url
            //not happy with this, we're forcing user to use search input at the top to get info
            if (_this.movieData.allMovies.length === 0) {
                _this.router.navigate(['/']);
            }
        });
    };
    SingleMovieComponent.prototype.fetchMovieWithAjax = function (type, id) {
        var _this = this;
        this.http.get("https://api.themoviedb.org/3/" + type + "/" + id + "?api_key=" + __WEBPACK_IMPORTED_MODULE_7__keys__["a" /* Keys */].omdbKey + "&append_to_response=videos,images,credits")
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (!res['media_type']) {
                res['media_type'] = type;
            }
            return res;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
        })
            .subscribe(function (res) {
            _this.movie = res;
            _this.media_type = type;
            _this.cast = res.credits.cast.filter(function (cast, index) { return index < 4 && cast.profile_path; });
            _this.trailerUrl = _this.sanitizer
                .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + res.videos.results[0].key);
        });
    };
    SingleMovieComponent.prototype.checkIfLiked = function () {
        var _this = this;
        var user = this.authService.user;
        if (user) {
            user.userList.forEach(function (movie) {
                if (movie.id === _this.id) {
                    _this.userLiked = true;
                }
            });
        }
    };
    SingleMovieComponent.prototype.addToList = function () {
        // this.checkIfLiked();
        this.userLiked = !this.userLiked;
        var userId = this.authService.user._id;
        this.movieData.addOneToFavorite(userId, this.movie);
    };
    SingleMovieComponent.prototype.removeFromList = function () {
        this.userLiked = !this.userLiked;
        var userId = this.authService.user._id;
        this.movieData.removeOneFromFavorite(userId, this.movie);
    };
    return SingleMovieComponent;
}());
SingleMovieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_14" /* Component */])({
        selector: 'app-single-movie',
        template: __webpack_require__(253),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__Services_moviedata_service__["a" /* MovieDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_moviedata_service__["a" /* MovieDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object])
], SingleMovieComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=single-movie.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_moviedata_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flickity__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flickity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flickity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFavoritesComponent = (function () {
    function UserFavoritesComponent(authService, movieData) {
        this.authService = authService;
        this.movieData = movieData;
        this.userFavorites = [];
        this.imageUrl = 'https://image.tmdb.org/t/p/w640';
    }
    UserFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userFavorites = this.authService.user.userList;
        // this.movieData.userMovies
        //               .subscribe( res => {
        //                 this.userFavorites = res;
        //               })
        setTimeout(function () { return _this.loadFlickity(); });
    };
    UserFavoritesComponent.prototype.loadFlickity = function () {
        var el = document.querySelector('.carousels');
        // var elem = el[this.index];
        var flkty = new __WEBPACK_IMPORTED_MODULE_1_flickity__(el, {
            // options
            initialIndex: 0,
            cellAlign: 'left',
            contain: true
        });
    };
    return UserFavoritesComponent;
}());
UserFavoritesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* Component */])({
        selector: 'app-user-favorites',
        template: __webpack_require__(254),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__Services_moviedata_service__["a" /* MovieDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_moviedata_service__["a" /* MovieDataService */]) === "function" && _b || Object])
], UserFavoritesComponent);

var _a, _b;
//# sourceMappingURL=user-favorites.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_moviedata_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(movieData, http, authService, router) {
        this.movieData = movieData;
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.user = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.authService.isUser
            .subscribe(function (res) { return _this.user = res; });
    };
    HeaderComponent.prototype.initForm = function () {
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            'search': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormControl */](null)
        });
    };
    HeaderComponent.prototype.searchSubmit = function () {
        var searchTerm = this.searchForm.value.search;
        this.router.navigate(['/search', searchTerm]);
        this.searchForm.reset();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(255),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Services_moviedata_service__["a" /* MovieDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_moviedata_service__["a" /* MovieDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// src/app/auth/auth.service.ts


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.user = null;
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.user != null;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSettingsComponent = (function () {
    function UserSettingsComponent(authService) {
        this.authService = authService;
    }
    UserSettingsComponent.prototype.ngOnInit = function () {
        this.user = this.authService.user;
    };
    return UserSettingsComponent;
}());
UserSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-user-settings',
        template: __webpack_require__(256),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_authentication_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserSettingsComponent);

var _a;
//# sourceMappingURL=user-settings.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserUpdateComponent = (function () {
    function UserUpdateComponent(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        this.user = this.authService.user;
        this.initForm();
    };
    UserUpdateComponent.prototype.initForm = function () {
        this.accountForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            'userName': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](this.user.userSettings.newUserName, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            'fullName': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](this.user.userSettings.fullName),
            'about': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](this.user.userSettings.about)
        });
    };
    UserUpdateComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.accountForm.value);
        var updates = this.accountForm.value;
        this.http.patch("https://morning-retreat-68692.herokuapp.com/" + this.user._id + "/edit", updates)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
            _this.authService.user = res;
            _this.authService.isUser.next(true);
            _this.router.navigate(['/user', _this.user._id]);
        });
    };
    return UserUpdateComponent;
}());
UserUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* Component */])({
        selector: 'app-user-update',
        template: __webpack_require__(257),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_authentication_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserUpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=user-update.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".progress{\n    position: absolute;\n    top: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".static-banner{\n\n    height:600px;\n     background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: center;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".static-banner{\n    height: 70vh;\n    width: 100%;\n    position: relative;\n    margin-bottom: 3%;\n    /*background: url('https://image.tmdb.org/t/p/w640/qedJJ2z9oBYKxxO4Pp8qAkfgPst.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;*/\n}\n\nimg{\n    height: 70vh;\n    width: 1500px;\n}\n\n.static-banner .text{\n    position: absolute;\n    top: 50%;\n    left: 10%;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\n\na{\n    width: 275px !important;\n    height: 400px ;\n}\nimg{\n  /*max-width: 100%;*/\n  /*max-height: 100%;*/\n}\n\n.flickity-prev-next-button {\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  background: #333;\n}\n.flickity-prev-next-button:hover {\n  background: #F90;\n}\n/* arrow color */\n.flickity-prev-next-button .arrow {\n  fill: white;\n}\n.flickity-prev-next-button.no-svg {\n  color: white;\n}\n/* position outside */\n.flickity-prev-next-button.previous {\n  left: -40px;\n}\n.flickity-prev-next-button.next {\n  right: -40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "img{\n    margin-right: 10px;\n    height: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "/*.container{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}*/\n.container{\n    margin-top: 5%;\n}\n\n.description{\n    padding-left: 40px;\n}\n\n.cast-image{\n    height: 300px;\n}\n\n.cast-name{\n    color: black !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\na{\n    width: 275px !important;\n    height: 400px ;\n}\nimg{\n  /*max-width: 100%;*/\n  /*max-height: 100%;*/\n}\n\n.flickity-prev-next-button {\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  background: #333;\n}\n.flickity-prev-next-button:hover {\n  background: #F90;\n}\n/* arrow color */\n.flickity-prev-next-button .arrow {\n  fill: white;\n}\n.flickity-prev-next-button.no-svg {\n  color: white;\n}\n/* position outside */\n.flickity-prev-next-button.previous {\n  left: -40px;\n}\n.flickity-prev-next-button.next {\n  right: -40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "nav{\n    /*margin-bottom: 3%;*/\n    height: 50px;\n}\n\n.input-field{\n    color: white;\n}\n\ninput[type=\"search\"] {\n  height: 50px;  \n}\n\ninput[type=\"search\"]:hover {\n    cursor: pointer;\n}\n\ninput[type=\"search\"]:focus { \n    background-color:black;\n    color: white;\n}\n\ninput:-webkit-autofill{\n    background-color:black;\n    color: white;\n}\n\n.small-form{\n    height: 50px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".user-update{\n    margin-top:10%;\n}\n\n.user-image{\n    max-height: 225px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched{\n    border: 2px solid red;\n}\n\n.user-setting{\n    margin-top: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n      <div class=\"indeterminate\"></div>\n  </div>"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<app-static-banner></app-static-banner>\n\n<app-user-favorites *ngIf='authService.isAuthenticated()'></app-user-favorites>\n\n<app-movie-row *ngFor=\"let movieRow of movieListComponent; let i = index\" \n               [movieObj]=\"movieRow\"\n               [index]=\"i\"\n               ></app-movie-row>\n\n\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"static-banner\" >\n  <img class='responsive-img' src='https://i.ytimg.com/vi/GzorZUuZqEI/maxresdefault.jpg' alt=\"\">\n  <div class=\"text\">\n    <h3>The Mummy</h3>\n    <a routerLink=\"/movie/282035\"class=\"waves-effect waves-light btn red\"><i class=\"material-icons left\">play_arrow</i>Play</a>\n  </div>\n</div>\n\n<!--<div class=\"static-banner\" >\n  <img class='responsive-img' src=\"{{ imageUrl + movie[random].backdrop_path }}\" alt=\"\">\n  <div class=\"text\">\n    <h3>{{ movie[random].title }}</h3>\n    <a class=\"waves-effect waves-light btn red\"><i class=\"material-icons left\">play_arrow</i>Play</a>\n  </div>\n</div>-->"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<h5>{{ movieObj.heading }}</h5>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"carousel\">\n\n      <!--<img *ngFor=\"let movie of movies; let last = last\"\n               #allImages\n               class='responsive-img carousel-cell'\n               src=\"{{ imageUrl + movie.poster_path  }}\">-->\n      <a *ngFor=\"let movie of movies; let last = last\" class='carousel-cell' [routerLink]=\"[movie.media_type, movie.id]\">\n        <img *ngIf=\"movie.poster_path\"\n             class='responsive-img' \n             src=\"{{ imageUrl + movie.poster_path  }}\">\n\n        <img *ngIf=\"!movie.poster_path\"\n             class='responsive-img' \n             src=\"https://dummyimage.com/275x400/000/fff&text=Image+Coming+Soon\">\n      </a>\n    </div>\n  </div>\n</div>\n<hr>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12\" *ngFor='let data of searchResults'>\n      <ng-container *ngIf=\"data.overview && data.poster_path\">\n        <div class=\"row\">\n          <div class=\"col m4 s6\">\n            <a [routerLink]=\"['/search', data.media_type, data.id]\">\n            <img class='responsive-img' src=\"{{ 'https://image.tmdb.org/t/p/w640' + data.poster_path}}\" alt=\"\">\n          </a>\n          </div>\n          <div class=\"col m8 s6\">\n\n            <a [routerLink]=\"['/search', data.media_type, data.id]\">\n            <h5 *ngIf=\"data.media_type === 'tv'; else movie\">\n              {{ data.name }}\n            </h5>\n            </a>\n            <ng-template #movie>\n              <h5>{{ data.title }}</h5>\n            </ng-template>\n\n            <p>\n              {{ data.overview | truncate:300 }}\n            </p>\n          </div>\n        </div>\n\n        <hr>\n      </ng-container>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf='movie'>\n    <div class=\"row\">\n      <div class=\"col m6 s12\">\n        <img class='responsive-img' src=\"{{ imageUrl + movie.poster_path  }}\" alt=\"\">\n      </div>\n      <div class=\"col m6 s12 description\">\n        <h3 *ngIf=\"movie.title\"><strong>{{ movie.title }}</strong></h3>\n        <h3 *ngIf=\"movie.name\"><strong>{{ movie.name }}</strong></h3>\n\n        <h5><strong>Rating:</strong></h5>\n        <i class=\"material-icons\">grade </i>\n        <h4 style=\"display: inline;\">{{ movie.vote_average }}</h4>\n        <br>\n        <h5><strong>Overview: </strong></h5>\n        <p>{{ movie.overview | truncate }}</p>\n        <br>\n        <br>\n\n        <div class=\"row valign-wrapper\">\n\n          <ng-container *ngIf='authService.isAuthenticated() && !userLiked'>\n            <div class=\"col s3\">\n              <a class=\"btn-floating btn-large waves-effect waves-light red\" (click)=\"addToList()\">\n                <i class=\"material-icons\">thumb_up</i>\n              </a>\n            </div>\n            <div class=\"col s6\">\n              <h5>Add To My List</h5>\n            </div>\n          </ng-container>\n\n\n          <!--change to !isAuth &&, movie id isnt in array-->\n          <ng-container *ngIf='authService.isAuthenticated() && userLiked'>\n            <div class=\"col s3\">\n              <a class=\"btn-floating btn-large waves-effect waves-light red\" (click)=\"removeFromList()\"><i class=\"material-icons\">thumb_down</i></a>\n            </div>\n            <div class=\"col s6\">\n              <h5>Remove From My List</h5>\n            </div>\n          </ng-container>\n          <div class=\"col s3\"></div>\n        </div>\n\n        <br>\n\n        <h5 *ngIf=\"!authService.isAuthenticated()\">Log In To Add To Your List</h5>\n\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col m3 s6\" *ngFor='let cast of cast; let i = index'>\n        <div class=\"card\">\n          <div class=\"card-image\">\n            <img class='cast-image'src=\"{{ imageUrl + cast.profile_path}}\">\n            <!--<span class=\"card-title\">{{ cast.name }}</span>-->\n          </div>\n          <div class=\"card-content\">\n            <p class='cast-name'>{{ cast.name }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row col m12\" >\n      <div class=\"video-container\" *ngIf=\"movie.videos.results.length > 0\">\n        <iframe width=\"650\" height=\"480\" [src]=\"trailerUrl\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n\n  <!--<h2 class='center-align' *ngIf=\"!movie\">No Movie Data Available</h2>-->\n</div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<h5>My List: </h5>\n\n<div class=\"row\">\n  <div class=\"col s12\" *ngIf='userFavorites.length > 0'>\n    <div class=\"carousels\">\n\n      <!--<img *ngFor=\"let movie of movies; let last = last\"\n               #allImages\n               class='responsive-img carousel-cell'\n               src=\"{{ imageUrl + movie.poster_path  }}\">-->\n      <a *ngFor=\"let movie of userFavorites; let last = last\" class='carousel-cell' \n        [routerLink]=\"movie.media_type ? ['/search', movie.media_type, movie.id] : ['/movies', movie.id]\">\n        <img *ngIf=\"movie.poster_path\"\n             class='responsive-img' \n             src=\"{{ imageUrl + movie.poster_path  }}\">\n\n        <img *ngIf=\"!movie.poster_path\"\n             class='responsive-img' \n             src=\"https://dummyimage.com/275x400/000/fff&text=Image+Coming+Soon\">\n      </a>\n    </div>\n  </div>\n\n  <div class=\"col s12 center-align\" *ngIf='userFavorites.length === 0'>\n    <h3>Add movies and shows to watch later</h3>\n  </div>\n</div>\n<hr>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<nav class=''>\n  <div class=\"nav-wrapper  black lighten-2 white-text \">\n    <div class=\"row hide-on-small-only\">\n\n      <div class=\"col s4\">\n        <a routerLink=\"/\" class=\"brand-logo left\">NoobFlix</a>\n      </div>\n\n\n      <div class=\"col s4\">\n        <form class='' (ngSubmit)=\"searchSubmit()\" [formGroup]=\"searchForm\">\n          <div class=\"input-field\">\n            <input id=\"search\" type=\"search\" class=\"center-align\" placeholder=\"Search\" required formControlName=\"search\" autocomplete=\"off\">\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">close</i>\n          </div>\n        </form>\n      </div>\n\n\n      <div class=\"col s4 \">\n\n        <ul id=\"nav-mobile\" class=\"right \">\n          <li *ngIf='!user; else userIsOn'><a href='/login'>Register/ Log In</a></li>\n\n          <ng-template #userIsOn>\n            <li *ngIf='!authService.user.userSettings.newUserName'><a [routerLink]=\"['/user', authService.user._id]\">{{ authService.user.userName }}</a></li>\n            <li *ngIf='authService.user.userSettings.newUserName'><a [routerLink]=\"['/user', authService.user._id]\">{{ authService.user.userSettings.newUserName }}</a></li>\n            <li><a href='/logout'>Log Out</a></li>\n          </ng-template>\n        </ul>\n\n\n      </div>\n    </div>\n    <a routerLink=\"/\" class=\"brand-logo left hide-on-med-and-up\">NoobFlix</a>\n    <a style=\"cursor: pointer;\" data-activates=\"dropdown1\" class=\"dropdown-button hide-on-med-and-up right\"><i class=\"material-icons\">menu</i></a>\n\n    <ul id='dropdown1' class='dropdown-content'>\n      <li><a routerLink='/'>Netflix Clone</a></li>\n      <li *ngIf='!user; else mobileUserIsOn'><a href='/login'>Register/ Log In</a></li>\n       <ng-template #mobileUserIsOn>\n            <li *ngIf='!authService.user.userSettings.newUserName'><a [routerLink]=\"['/user', authService.user._id]\">{{ authService.user.userName }}</a></li>\n            <li *ngIf='authService.user.userSettings.newUserName'><a [routerLink]=\"['/user', authService.user._id]\">{{ authService.user.userSettings.newUserName }}</a></li>\n            <li><a href='/logout'>Log Out</a></li>\n          </ng-template>\n    </ul>\n    \n  </div>\n</nav>\n <form class='hide-on-med-and-up small-form' (ngSubmit)=\"searchSubmit()\" [formGroup]=\"searchForm\">\n          <div class=\"input-field \">\n            <input id=\"search\" type=\"search\" class=\"center-align valign-wrapper\" placeholder=\"Search\" required formControlName=\"search\" autocomplete=\"off\">\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons prefix\">search</i></label>\n            <!--<i class=\"material-icons\">close</i>-->\n          </div>\n        </form>\n\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"container user-update\">\n  <div class=\"row\">\n    <div class=\"col s4\">\n      <img class='responsive-img user-image' src=\"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png\"\n        alt=\"\">\n      <hr>\n      <p *ngIf=\"!user.userSettings.newUserName\">@{{ user.userName }}</p>\n      <p *ngIf=\"user.userSettings.newUserName\">@{{ user.userSettings.newUserName }}</p>\n      \n      <br>\n      <a class=\"waves-effect waves-light btn\" [routerLink]=\"['/user', user._id, 'edit']\">Update Account</a>\n    </div>\n\n    <div class=\"col s8\">\n      <ng-container *ngIf='user.userSettings.about'>\n        <h3>About:</h3>\n        <h5>{{ user.userSettings.about }}</h5>\n      </ng-container>\n\n      <ng-container *ngIf='!user.userSettings.about'>\n        <h3>About:</h3>\n        <h5>This user still needs to write something about themselves</h5>\n      </ng-container>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container user-setting\">\n    <form (ngSubmit)=\"submitForm()\" [formGroup]=\"accountForm\">\n      <div class=\"row\">\n         <div class=\" col s6\">\n         <label for=\"first_name\">User Name</label>\n          <input formControlName=\"userName\" id=\"first_name\" type=\"text\" class=\"validate\">\n          </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\" col s6\">\n         <label for=\"full\">Full Name</label>\n          <input formControlName=\"fullName\" id=\"full\" type=\"text\" class=\"validate\">\n          </div>\n      </div>\n      \n\n          <div class=\" col s12\">\n            <label for=\"textarea1\">About:</label>\n          <textarea formControlName=\"about\" id=\"textarea1\" class=\"materialize-textarea\"></textarea>\n          \n        </div>\n      <button class='waves-effect waves-light btn center-align' type=\"submit\">Update Account</button>\n    </form>\n  </div>\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MovieDataService = (function () {
    function MovieDataService(authService, http, router) {
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.allMovies = [];
        this.allDataFetched = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.userMovies = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.TopShow = false;
        this.PopularShow = false;
        this.Popular = false;
        this.Latest = false;
        this.Today = false;
    }
    MovieDataService.prototype.getLatest = function () {
        return this.allMovies.filter(function (movie) { return movie.type == 'Latest'; });
    };
    MovieDataService.prototype.getPopular = function () {
        return this.allMovies.filter(function (movie) { return movie.type == 'Popular'; });
    };
    MovieDataService.prototype.getTopRatedShows = function () {
        return this.allMovies.filter(function (movie) { return movie.type === 'TopShow'; });
    };
    MovieDataService.prototype.getPopularShows = function () {
        return this.allMovies.filter(function (movie) { return movie.type === 'PopularShow'; });
    };
    MovieDataService.prototype.getTodayShows = function () {
        return this.allMovies.filter(function (movie) { return movie.type === 'Today'; });
    };
    MovieDataService.prototype.getOneMovie = function (movieId) {
        return this.allMovies.filter(function (movie) { return movie.id === movieId; });
    };
    MovieDataService.prototype.addOneToFavorite = function (userId, movie) {
        var _this = this;
        this.http.post("https://morning-retreat-68692.herokuapp.com/" + userId + "/movies", movie)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err); })
            .subscribe(function (res) {
            _this.authService.user.userList.push(movie);
            _this.userMovies.next(_this.authService.user.userList);
        });
    };
    MovieDataService.prototype.removeOneFromFavorite = function (userId, movie) {
        var _this = this;
        this.http.patch("https://morning-retreat-68692.herokuapp.com/" + userId + "/movies", movie)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err); })
            .subscribe(function (res) {
            console.log(res);
            _this.authService.user.userList = res;
            _this.userMovies.next(_this.authService.user.userList);
        });
    };
    return MovieDataService;
}());
MovieDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MovieDataService);

var _a, _b, _c;
//# sourceMappingURL=moviedata.service.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keys; });
/* unused harmony export authKeys */
var Keys = {
    omdbKey: '0dc222122a4dfc6bac1d4ecc65b6f199',
};
var authKeys = {
    clientID: 'fng5wonqHep26LWaL2FozpJfTKtRBdqd',
    domain: 'book-trading-app.auth0.com',
    responseType: 'token id_token',
    audience: 'https://book-trading-app.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
};
//# sourceMappingURL=keys.js.map

/***/ })

},[525]);
//# sourceMappingURL=main.bundle.js.map