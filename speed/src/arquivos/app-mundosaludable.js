(function(){
$(document).ready(function(a) {
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a("img").each(function() {
            var b = a(this).attr("data-mobile");
            a(this).attr("src", b)
        });
    });

    var filterToggle = (function() {
        $( ".filter-title-ms" ).on( "click", function(e) {
            e.preventDefault();
            var $this = $(this);
          $this.parents('.container-filter-ms').toggleClass( "active-ms");
        });
      });

    var filterInput = function(){
            var $conditionalInput = $('.yodecidi-card');
            var $cardInput = $('input#yodecidi-filter');

            $conditionalInput.show();
            $cardInput.on('click', function(){
                if ( $(this).is(':checked') )
                    $conditionalInput.siblings().hide(),
                    $conditionalInput.show();
                else
                    $conditionalInput.siblings().show();
            });

    };
    filterToggle();
    filterInput();
}());