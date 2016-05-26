var NewsModel = require('../db/news.model');

module.exports = {
	find: function(news) {
		return NewsModel.find(news);
	},

	add: function(news) {
		var newNews = new NewsModel(news);
		return newNews.save();
	},
}