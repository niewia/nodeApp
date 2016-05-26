import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { News } from '../model/News';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class NewsService {
	constructor(private http: Http) { }
	private newsUrl = 'http://localhost:3003/api/news';

	getNews(): Observable<string> {
		return this.http.get(this.newsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}
	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = error.message || error.statusText || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}