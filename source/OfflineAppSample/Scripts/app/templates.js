APP.templates = (function () {
    'use strict';

    function application() {
        return '<div id="window"><div id="header"><h1>Windows Azure Blog</h1></div><div id="body"></div></div>';
    }

    function home() {
        return '<button id="refreshButton">Refresh the news!</button><div id="headlines"></div></div>';

    }

    function articleList(articles) {
        var i, l, output = '';

        if (!articles.length) {
            return '<p><i>No articles have been found, maybe you haven\'t <b>refreshed the news</b>?</i></p>';
        }
        
        for (i = 0, l = articles.length; i < l; i = i + 1) {
            
            output = output + '<li><a href="' + APP_ROOT + articles[i].id + '"><b>' + articles[i].headline + '</b><br />By ' + articles[i].author + ' on ' + articles[i].date + '</a></li>';
        }
        return '<ul>' + output + '</ul>';
    }

    function article(articleData) {

        // If the data is not in the right form, redirect to an error
        if (!articleData) {
            APP.applicationController.route(APP_ROOT + 'error');
            return;
        }
        return '<a href="' + APP_ROOT + '">Go back home</a><h2>' + articleData.headline + '</h2><h3>By ' + articleData.author + ' on ' + articleData.date + '</h3>' + articleData.body;
    }

    function articleLoading() {
        return '<a href="' + APP_ROOT  + '">Go back home</a><br /><br />Please wait&hellip;';
    }

    return {
        application: application,
        home: home,
        articleList: articleList,
        article: article,
        articleLoading: articleLoading
    };
}());