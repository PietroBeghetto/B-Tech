$(function () {
    $.get("http://twitrss.me/twitter_user_to_rss/?user=EducationFest", function (data) {
        var $xml = $(data);
        $xml.find("item").each(function () {
            var $this = $(this),
                item = {
                    title: $this.find("title").text(),
                    link: $this.find("link").text(),
                    description: $this.find("description").text(),
                    pubDate: $this.find("pubDate").text(),
                    author: $this.find("author").text()
                }
            var date = new Date(item.pubDate);
            $(".twitter-feed").append('<div class="tweet"><p class="pubdate">' + date.toDateString() + ' ' + date.toLocaleTimeString() + '</p>' + item.description + '</div>');
        });
        var totalHeight;
        $(".twitter-button").click(function () {
            totalHeight = 0;
            $(".tweet").each(function () {
                totalHeight += $(this).outerHeight();
            });
            $(".twitter-box").css({
                "max-height": $(".twitter-box").height(),
                "opacity": "0.4"
            }).animate({
                "max-height": totalHeight,
                "opacity": "1"
            });
            $(this).fadeOut();
            return false;
        });
    });

});