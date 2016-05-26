import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import { AddNewsComponent } from './../addNews/add-news.component';
import { NewsService } from './../../service/news.service';
import { News } from './../../model/News';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{message}}</h1>
    <addNews></addNews>
  `,
  directives: [
    ROUTER_DIRECTIVES, 
    AddNewsComponent
  ],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    NewsService
  ]
})
@RouteConfig([
  {
    path: '/news',
    name: 'AddNews',
    component: AddNewsComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'News';
  news: News[];
  message: string;
  constructor(private newsService: NewsService) { }
  getNews() {
    this.newsService.getNews().subscribe(message => this.message = message);
  }
  ngOnInit() {
    this.getNews();
  }
}
