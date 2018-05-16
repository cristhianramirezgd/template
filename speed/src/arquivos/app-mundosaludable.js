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
// callurl();
var vBlog = 'https://www.tiendasjumbo.co/mundo-saludable/';
var hostBlog = 'https://catalogostiendasjumbo.co/tiendasjumboblog/';
var urlApiDev = hostBlog + 'wp-json/?=routes';
var urlApi = hostBlog + 'wp-json/wp/v2/';
var urlPosts = hostBlog + urlApi + 'posts';
var categoryWp = urlApi + 'categories';
var postC = 'posts?categories=';
var wC = urlApi + postC + 0;
var c1 = urlApi + postC + 1;
var c2 = urlApi + postC + 2;
var c3 = urlApi + postC + 3;
var c4 = urlApi + postC + 4;
var home = urlApi + postC + 18;
$(document).ready(function () {
    if(window.location.href.indexOf("category-yo-decidi") > -1) {
       console.log("Yo Decidi Category [2]");
        function msBlog() {
            $.getJSON( c3, function(msg) {
                catgoriesCallback(msg);
                JsonpCallback(msg);
          });
        }
        msBlog();
    }
     else if (window.location.href.indexOf("category-yo-puedo") > -1) {
        console.log("Yo Puedo Category [1]");
        function msBlog() {
            $.getJSON( c2, function(msg) {
                catgoriesCallback(msg);
                JsonpCallback(msg);
          });
        }
        msBlog();
    }
    else if(window.location.href.indexOf("category-yo-quiero") > -1) {
        console.log("Yo Quiero Category [0]");
        function msBlog() {
            $.getJSON( c4, function(msg) {
                catgoriesCallback(msg);
                JsonpCallback(msg);
          });
        }
        msBlog();
    }
    else {
        function msBlog() {
            $.getJSON( home, function(msg) {
                homeShelf(msg);
                JsonpCallback(msg);
                sliderHome(msg)
          });
        }
        msBlog();
    }
});
function homeShelf(json){
    $('#titleCategorie').append('<h2 class="title-section-ms">' 
      + '<span>' 
      + '<i class="icon icon-blog">' 
      + '</i>' 
      + json[0].e_categories[0].name
      + '</span>' 
      + '<a href="">' 
      + 'VER MÁS' 
      + '</a>' 
      + '</h2>');
}
function sliderHome(){
    $('.morecards').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      // adaptiveHeight: true,
      arrows: true,
      responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots:true,
              arrows: false
            }
          }
        ]
    });
};
function catgoriesCallback(json){
    var ct =''
    for (var i = 0; i < 1; i++) {
        if (json[i].e_categories.length == 2) {
            ct += json[i].e_categories[1].name
        
        }
        else if(json[i].e_categories.length == 1) {
             ct += json[i].e_categories[0].name
            }
        else{
             ct += 'Sin Categoria'
            }
    }
    $('#filterTitleCategorie').append('<h6 class="filter-title-ms">' 
      + ct
      + '</h6>'
      );
    $('#titleCategorie').append('<h2 class="title-section-ms">' 
         + '<span>' 
         + '<i class="icon icon-blog">' 
         + '</i>' 
         + ct
         + '</span>' 
         + '</h2>');
}
function JsonpCallback(json) {
  
// ciclo i
for (var i = 0; i < json.length; i++) {
var texto = '';
    $.each(json[i].e_tags, function(k, item) {
       texto += item.name;
       texto += ', ';
    });
var slugTag = '';
    $.each(json[i].e_tags, function(s, item) {
       slugTag += ' ';
       slugTag += item.slug;
    });
    // ciclo j
    for (var j = 0; j < json[i].e_tags.length; j++) {
      // filters
          $('#filterTitleCategorie').append(
          '<div class="filters-ms">'
          +'<label>'
          + json[i].e_tags[j].name
          +'</label>'
          +' <input type="checkbox" value="' + json[i].e_tags[j].slug +'"/>'
          +'</div>');
        };
       // cards
        $('#cardsMs').append(
           '<li class="card-ms card-article-ms' + slugTag +'">'
          + '<div class="card-img-ms">'
          + '<span class="card-label-filter-ms">' + texto + '</span>'
          + '<img src="' + json[i].better_featured_image.source_url + '" />'
          + '</div>'
          + '<div class="card-text-ms">'
          + '<a href="'+ json[i].link +'">'
          + '<h6 class="text-bold">' + json[i].title.rendered + '</h6>'
          +  json[i].excerpt.rendered 
          + '</a>'
          + '<div class="card-interaction-ms">'
          + '<span><i class="icon-heart"></i>'
          + '<small class="text-dark">1.987</small></span>'
          + '<a class="text-jumbogreen" href="'+ json[i].link +'"><span>Ver<i class="icon-plus"></i></span></a>'
          + '</div>'
          + '</div>'
          + '</li>');

        };
    $( ".filter-title-ms" ).on( "click", function(e) {
        e.preventDefault();
        var $this = $(this);
      $this.parents('.container-filter-ms').toggleClass( "active-ms");
    });
};
// fancy box
$('.terms-ms').fancybox({
 protect: true,
 touch: false
  });
$('.container-banner-middle').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
         arrows:false
       }
     }
  ]
});
$('.container-banner-bottom').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,  
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
         arrows:false
       }
     }
  ]
});