$(document).ready(function(a) {
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a(".container-banner-middle img.slick-slide").each(function() {
            var b = a(this).attr("data-mobile");
            a(this).attr("src", b)
        });
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a(".bg-banner img.bg-img").each(function() {
            var b = a(this).attr("data-mobile");
            a(this).attr("src", b)
        });
    });
