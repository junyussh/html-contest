/* Process bar Start */
$({
    property: 0
}).animate({
    property: 100
}, {
    duration: 3000,
    step: function() {
        var percentage = Math.round(this.property);

        $('#progress').css('width', percentage + "%");

        if (percentage == 100) {
            $("#progress").addClass("done"); //完成，隐藏进度条
        }
    }
});
/* Process bar End */
/* Lightbox Start */
$(document).ready(function() {
    $('article').magnificPopup({
        delegate: '.image-link',
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

            titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            // titleSrc: function(item) {
            //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            // }

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">圖片</a>載入失敗' // Error message
        }
    });
});

/* Lightbox End */

/* Smooth Scrolling */
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $(".nav-content").animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('.scrollup').click(function() {
    $(".nav-content").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$(".scroll-article").on("click", function() {
    $(".nav-content").animate({
        scrollTop: $(".article").offset().top
    }, 1000);
});
/* Smooth Scrolling End */

$(".image").each(function() {
    var alt = $(this).attr("alt");
    $(this).after('<span class="image-meta">' + alt + '</span>');
});
$(".menu-button").on("click", function() {
    if ($(this).hasClass("close")) {
        $(this).css("transform", "rotate(-180deg)").removeClass("close");
        $(".fixed-action-btn").css("z-index", "998");
        $(".nav-container").removeClass("nav-menu-open");
    } else {
        $(this).css("transform", "rotate(90deg)").addClass("close");
        $(".fixed-action-btn").css("z-index", "0");
        $(".nav-container").addClass("nav-menu-open");
    }
});
$(".menu").on("click", function() {
    if ($(this).hasClass("close")) {
        $(this).removeClass("close");
        $(".menu-button").css("visibility", "visible");
        $(".nav-container").removeClass("nav-menu-open");
    } else {
        $(this).addClass("close");
        $(".menu-button").css("visibility", "hidden");
        $(".nav-container").addClass("nav-menu-open");
    }
});
$(".nav-content").on("click", function() {
    if ($(".menu-button").hasClass("close")) {
        $(".menu-button").css("transform", "rotate(-180deg)").removeClass("close");
        $(".nav-container").removeClass("nav-menu-open");
    }
});
$(".btn-floating").on("click", function() {
    if ($(".fixed-action-btn").hasClass("open"))
        $(".fixed-action-btn").removeClass("open");
    else
        $(".fixed-action-btn").addClass("open");
});
$('.enter').magnificPopup({
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
