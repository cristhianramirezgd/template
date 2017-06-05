<!-- video ligthbox -->
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="speed/build/arquivos/jwplayer.js"></script>
<script src="speed/build/arquivos/jwplayer.html5.js"></script>
<script src="speed/build/arquivos/jquery.classybox.js"></script>
<script src="speed/build/arquivos/logoScroll.js"></script>
<script>
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
</script>

<script>
//script para toggle de hamburguer
$( ".nav-toggle" ).click(function() {
  $( ".mega" ).slideToggle( "slow" );
});
</script>
	
<script>
	$( ".vertical" ).click(function() {
	  $(this).children("li:not(.vertical-item)").slideToggle( "fast" );
	});	
</script>