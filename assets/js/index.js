    $(function() {
        $('a[href*="#"]:not([href="#"])').on("click", (function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        }));
        $(".menu").on("click", function() {
            if ($(this).hasClass("close")) {
                $(this).removeClass("close");
                $(".sidenav").css("visibility", "hidden");
            } else {
                $(this).addClass("close");
                $(".sidenav").css("visibility", "visible");
            }
        });
    });
