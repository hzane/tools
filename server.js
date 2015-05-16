var scraperjs = require('scraperjs');
scraperjs.StaticScraper.create('http://localhost/boilerplatenode/test-mt.html')
    .scrape(function($) {
        return $("a.img-container").map(function() {
            return $(this)[0].attribs.href;
        }).get();
    }, function(news) {
        console.log(news);
    })