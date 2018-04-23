$(document).ready(function(){
      // slider
      var $item = $('.h-slider__item'), //Cache your DOM selector
             visible = 2, //Set the number of items that will be visible
             index = 0, //Starting index
             endIndex = ( $item.length / visible ); //End index
         
         $('.h-slider__arrow-right').click(function(){
             if(index < endIndex ){
               index++;
               $item.animate({'left':'-=600px'});
             }
         });
         
         $('.h-slider__arrow-left').click(function(){
             if(index > 0){
               index--;            
               $item.animate({'left':'+=600px'});
             }
         });
	    // fancy box
	    $('.myfancy').fancybox({
	     protect: true,
	     touch: false
	      });

	    $('<span class="close-submodal-button">' +'x'+'</span>', {
	    	}).prependTo(".info-modal");
	    $( "span.close-submodal-button" ).click(function() {
	      $( ".info-modal" ).removeClass( "menu-active-catalog" );
	    });

    });

    // menu mobile
    $( ".nav__buttons" ).click(function() {
      $( this ).toggleClass( "menu-active-catalog" );
    });
    $( ".nav__buttons" ).clone().prependTo( ".fixed-navigation" );
    // scroll
    $(".scroll-down").click(function (){
        $('html, body').animate({
            scrollTop: $(".navigation-container").offset().top
        }, 2000);
    });
    $(".btn-backtop").click(function (){
        $('html, body').animate({
            scrollTop: $(".principal-banner-top").offset().top
        }, 2000);
    });
    $(".navigation-alcoba").click(function (){
        $('html, body').animate({
            scrollTop: $(".section-alcoba").offset().top
        }, 1500);
    });
    $(".navigation-sala").click(function (){
        $('html, body').animate({
            scrollTop: $(".section-sala").offset().top
        }, 1500);
    });
    $(".navigation-cocina").click(function (){
        $('html, body').animate({
            scrollTop: $(".section-cocina").offset().top
        }, 1500);
    });
    $(".navigation-decoracion").click(function (){
        $('html, body').animate({
            scrollTop: $(".section-decoracion").offset().top
        }, 1500);
    });
    $(".navigation-bano").click(function (){
        $('html, body').animate({
            scrollTop: $(".section-bano").offset().top
        }, 1500);
    });
    $( ".submodal-container .info-modal-button").click(function() {
      $( ".info-modal" ).toggleClass( "menu-active-catalog" );
    });
    $( ".submodal-container .terms-modal-button").click(function() {
      $( ".terms-modal" ).toggleClass( "menu-active-catalog" );
    });
   var SubPaginationModal = function(){
   		$('.container-modal-sub span.submodal-1').click(function (){
   			$( "div#submodal-1" ).fadeIn('span.submodal -1');
   			$( "div#submodal-1" ).removeClass('node-disable');
   			$( "div#submodal-1" ).siblings('.content-submodal').addClass('node-disable');
   		});
   		$('.container-modal-sub span.submodal-2').click(function (){
   			$( "div#submodal-2" ).fadeIn('span.submodal-2');
   			$( "div#submodal-2" ).removeClass('node-disable');
   			$( "div#submodal-2" ).siblings('.content-submodal').addClass('node-disable');
   		});
   		$('.container-modal-sub span.submodal-3').click(function (){
   			$( "div#submodal-3" ).fadeIn('span.submodal-3');
   			$( "div#submodal-3" ).removeClass('node-disable');
   			$( "div#submodal-3" ).siblings('.content-submodal').addClass('node-disable');
   		});
   		$('.container-modal-sub span.submodal-4').click(function (){
   			$( "div#submodal-4" ).fadeIn('span.submodal-4');
   			$( "div#submodal-4" ).removeClass('node-disable');
   			$( "div#submodal-4" ).siblings('.content-submodal').addClass('node-disable');
   		});
   		$('.container-modal-sub span.submodal-5').click(function (){
   			$( "div#submodal-5" ).fadeIn('span.submodal-5');
   			$( "div#submodal-5" ).removeClass('node-disable');
   			$( "div#submodal-5" ).siblings('.content-submodal').addClass('node-disable');
   		});
   		$('.container-modal-sub span.submodal-6').click(function (){
   			$( "div#submodal-6" ).fadeIn('span.submodal-6');
   			$( "div#submodal-6" ).removeClass('node-disable');
   			$( "div#submodal-6" ).siblings('.content-submodal').addClass('node-disable');
   		});
   		$('.container-modal-sub span.submodal-7').click(function (){
   			$( "div#submodal-7" ).fadeIn('span.submodal-7');
   			$( "div#submodal-7" ).removeClass('node-disable');
   			$( "div#submodal-7" ).siblings('.content-submodal').addClass('node-disable');
   		});
   };
   $(SubPaginationModal);
   // console.log(SubPaginationModal)
	