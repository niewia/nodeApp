"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var add_news_component_1 = require('./../addNews/add-news.component');
var news_service_1 = require('./../../service/news.service');
var AppComponent = (function () {
    function AppComponent(newsService) {
        this.newsService = newsService;
        this.title = 'News';
    }
    AppComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService.getNews().subscribe(function (message) { return _this.message = message; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{message}}</h1>\n    <addNews></addNews>\n  ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                add_news_component_1.AddNewsComponent
            ],
            providers: [
                http_1.HTTP_PROVIDERS,
                router_deprecated_1.ROUTER_PROVIDERS,
                news_service_1.NewsService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/news',
                name: 'AddNews',
                component: add_news_component_1.AddNewsComponent,
                useAsDefault: true
            }
        ]), 
        __metadata('design:paramtypes', [news_service_1.NewsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map