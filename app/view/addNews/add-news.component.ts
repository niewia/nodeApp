import { Component } from '@angular/core';
import { News } from '../../model/News';

@Component({
  selector: 'addNews',
  templateUrl: 'app/view/addNews/add-news.component.html'
})

export class AddNewsComponent { 
	news: News = {
		id: 1234,
		title: 'Super tytuł',
		content: 'Fajny tekst'
	}
}