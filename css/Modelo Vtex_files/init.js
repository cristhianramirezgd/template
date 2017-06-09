// preload images
function preload(sources)
{
  var images = [];
  for (i = 0, length = sources.length; i < length; ++i) {
    images[i] = new Image();
    images[i].src = sources[i];
  }
}
//fancy box de video
    $(document).ready(function() {
        $(".gallery a").ClassyBox();
        $(".player a").ClassyBox();
        $(".video a").ClassyBox({
            width: 900,
            title: 0
        });
        $("#frame").ClassyBox({
            iframe: 1,
            social: 0,
            height: 600,
            width: 900
        });
        $("#ajax").ClassyBox({
            height: 450,
            width: 555,
            ajaxSuccess: function(data) {
                $(".classybox-wrap .content").append(data);
            }
        });
        $('a[href*="vimeo"], a[href*="vevo"], a[href*="dailymotion"], a[href*="5min"], a[href*="ustream"], a[href*="metacafe"], a[href*="hell"], a[href*="myspace"]').ClassyBox({
            height: 500,
            width: 850
        });
        $(window).ClassyBox({
            autoDetect: 1
        });
    });
//script para toggle de hamburguer
$( ".navigation" ).click(function() {
  $( ".mega" ).slideToggle( "slow" );
});
$( ".vertical" ).click(function() {
	  $(this).children("li:not(.vertical-item)").slideToggle( "fast" );
	});	
$( ".settings-nav" ).click(function() {
  $( ".setting-toggle" ).slideToggle( "slow" );
});
// script para toogle de footer en edades
$(function () {
    $(window).bind("resize", function () {
        // console.log($(this).width())
        if ($(this).width() > 769) {
            $('.age').removeClass('toggle-age').addClass('is-desktop-true')//añade clase para 
             // $('.dropdown').addClass('is-desktop-true-nav')//añade clase para vista en desktop
        } else {
            $('.age').removeClass('is-desktop-true').addClass('toggle-age')//añade clase para  toogle en mobile
             $('.dropdown').removeClass('is-desktop-true-nav')//quita clase para  toogle en mobile
        }
    }).trigger('resize');
})
//toggle footer age
$( ".icon-brand" ).click(function() {
  $( ".toggle-age" ).slideToggle( "slow" );
});
//toggle nav login

// $( ".is-desktop-true-nav" ).hover(function() {
//   $( ".toogle-dropdown" ).slideToggle( "fast" );
// });

$( ".is-desktop-true-nav" ).click(function() {
  $( ".toogle-dropdown" ).slideToggle( "fast" );
});
//carousel responsive
 $(document).ready(function(){
   $('.slider-principal').bxSlider({
     slideWidth: 1200,
     minSlides: 1,
     maxSlides: 1,
     slideMargin: 5
   });
 });  
//carousel responsive
 $(document).ready(function(){
   $('.slider-marcas').bxSlider({
     slideWidth: 80,
     minSlides: 10,
     maxSlides: 16,
     slideMargin: 5
   });
 });     