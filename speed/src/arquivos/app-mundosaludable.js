$(document).ready(function(a) {
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a("img").each(function() {
            var b = a(this).attr("data-mobile");
            a(this).attr("src", b)
        });
        $(window).load(function() {
          $( ".mundo-saludable-v2").addClass( "intro-transition" );
        });
    });
    $( function() {
        $( ".filter-title-ms" ).on( "click", function(e) {
            e.preventDefault();
            var $this = $(this);
          $this.parents('.container-filter-ms').toggleClass( "active-ms");
        });
      } );

       