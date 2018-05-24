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
    filterToggle();
    (function($) {
            var vBlog = 'https://www.tiendasjumbo.co/mundo-saludable/';
            var hostBlog = 'https://catalogostiendasjumbo.co/tiendasjumboblog/';
            var urlApiDev = hostBlog + 'wp-json/?=routes';
            var urlApi = hostBlog + 'wp-json/wp/v2/';
            var urlPosts = urlApi + 'posts/';
            var categoryWp = urlApi + 'categories';
            var postC = 'posts?categories=';
            var wC = urlApi + postC + 0;
            var c1 = urlApi + postC + 1;
            var c2 = urlApi + postC + 2;
            var c3 = urlApi + postC + 3;
            var c4 = urlApi + postC + 4;
            var home = urlApi + postC + 18;
            var url;
            var cardItem;
            var imgCover;
            var link;
            var title;
            var slug;
            var nameSlugTagFilter;
            var slugSlugTagFilter;
            var categoriesTag;
            var resume;
            var $items;

        function cards(url){
        $.each(url, function(index, post) {
            var i = 0;
            if (jQuery.inArray( i, post.categories ) != 1) {
                i++
                // console.log(i)
                // console.log(this.title['rendered']);
                var imgCover = this.better_featured_image.media_details.sizes.thumbnail['source_url'];
                var link = this.link.replace("https://catalogostiendasjumbo.co/tiendasjumboblog/","");
                var title = this.title['rendered'];
                var slug = this.slug;
                var nameSlugTagFilter = this.e_tags[0].name;
                var slugSlugTagFilter = this.e_tags[0].slug;
                var slugTag = '';
                    $.each(this.e_tags, function(sTags, item) {
                       slugTag += ' ';
                       slugTag += item.slug;
                    });
                var nameTag = '';
                    $.each(this.e_tags, function(nTags, item) {
                       nameTag += item.name;
                       nameTag += ', ';
                    });
                var categoriesTag = '';
                    $.each(this.e_categories, function(nCategories, item) {
                       categoriesTag += item.name;
                       categoriesTag += ', ';
                    });
                var resume = this.excerpt['rendered'];
                // console.log(slugTag)
                // console.log(nameTag)
                // console.log(categoriesTag)
                switch (i) {
                    case 1:
                        $('#cardsMs').append('<li>'
                             + '<div class="card-ms card-article-ms '+ slugTag +'">'
                             + '<div class="card-img-ms">'
                             + '<span class="card-label-filter-ms">'+ nameTag +'</span>'
                             + '<img src="' + imgCover + '" />'
                             + '</div>'
                             + '<div class="card-text-ms">'
                             + '<a href="/mundo-saludable/?/'+ link +'">'
                             + '<h6 class="text-bold">' + title + '</h6>'
                             + resume
                             + '</a>'
                             + '<div class="card-interaction-ms">'
                             + '<span><i class="icon-heart"></i>'
                             + '<small class="text-dark">1.987</small></span>'
                             + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                             + '</div>'
                             + '</div>'
                             + '</div>'
                             + '</li>'
                             );
                        break;
                    case 2:
                        $('#cardsMs').append('<li>'
                             + '<div class="card-ms card-article-ms">'
                             + '<div class="card-img-ms">'
                             + '<span class="card-label-filter-ms"></span>'
                             + '<img src="' + imgCover + '" />'
                             + '</div>'
                             + '<div class="card-text-ms">'
                             + '<a href="mundo-saludable/?/'+ link +'">'
                             + '<h6 class="text-bold">' + title + '</h6>'
                             + resume
                             + '</a>'
                             + '<div class="card-interaction-ms">'
                             + '<span><i class="icon-heart"></i>'
                             + '<small class="text-dark">1.987</small></span>'
                             + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                             + '</div>'
                             + '</div>'
                             + '</div>'
                             + '</li>'
                             );
                        break;
                    case 3:
                        $('#cardsMs').append('<li>'
                             + '<div class="'+ slugTag +'  card-ms card-article-ms ">'
                             + '<div class="card-img-ms">'
                             + '<span class="card-label-filter-ms">'+ nameTag +'</span>'
                             + '404 Image not found"'
                             + '</div>'
                             + '<div class="card-text-ms">'
                             + '<a href="mundo-saludable/?/'+ link +'">'
                             + '<h6 class="text-bold">' + title + '</h6>'
                             + resume
                             + '</a>'
                             + '<div class="card-interaction-ms">'
                             + '<span><i class="icon-heart"></i>'
                             + '<small class="text-dark">1.987</small></span>'
                             + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                             + '</div>'
                             + '</div>'
                             + '</div>'
                             + '</li>'
                             );
                        break;
                    case 4:
                        $('#cardsMs').append('<li>'
                             + '<div class="card-ms card-article-ms ">'
                             + '<div class="card-img-ms">'
                             + '<span class="card-label-filter-ms"></span>'
                             + '<img src="" alt="404 Image not found"/>'
                             + '</div>'
                             + '<div class="card-text-ms">'
                             + '<a href="mundo-saludable/?/'+ link +'">'
                             + '<h6 class="text-bold">' + title + '</h6>'
                             + resume
                             + '</a>'
                             + '<div class="card-interaction-ms">'
                             + '<span><i class="icon-heart"></i>'
                             + '<small class="text-dark">1.987</small></span>'
                             + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                             + '</div>'
                             + '</div>'
                             + '</div>'
                             + '</li>'
                             );
                        break;
                    default:
                }
            }
        });
        $('.morecards').slick({
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 3,
              adaptiveHeight: true,
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


    //FIltros Isotope para Categorias
    function filterCards(url){
        function cardItem(){
             $.each(url, function(index, post) {
            var slugTag;
            var nameTag;
                var i = 0;
                if (jQuery.inArray( i, post.categories ) != 1) {
                    i++
                    // console.log(i)
                    // console.log(this.title['rendered']);
                    var imgCover = this.better_featured_image.media_details.sizes.thumbnail['source_url'];
                    var link = this.link.replace("https://catalogostiendasjumbo.co/tiendasjumboblog/","");
                    var title = this.title['rendered'];
                    var slug = this.slug;
                    var nameSlugTagFilter = this.e_tags[0].name;
                    var slugSlugTagFilter = this.e_tags[0].slug;
                    var slugTag = '';
                        $.each(this.e_tags, function(sTags, item) {
                           slugTag += ' ';
                           slugTag += item.slug;
                        });
                    var nameTag = '';
                        $.each(this.e_tags, function(nTags, item) {
                           nameTag += item.name;
                           nameTag += ', ';
                        });
                    var categoriesTag = '';
                        $.each(this.e_categories, function(nCategories, item) {
                           categoriesTag += item.name;
                           categoriesTag += ', ';
                        });
                    var resume = this.excerpt['rendered'];
                    // console.log(slugTag)
                    // console.log(nameTag)
                    // console.log(categoriesTag)
                    switch (i) {
                        case 1:
                            $('#cardsMsCategory').append('<li class="card-ms card-article-ms'+ slugTag +'">'
                                 + '<div>'
                                 + '<div class="card-img-ms">'
                                 + '<span class="card-label-filter-ms">'+ nameTag +'</span>'
                                 + '<img src="' + imgCover + '" />'
                                 + '</div>'
                                 + '<div class="card-text-ms">'
                                 + '<a href="mundo-saludable/?/'+ link +'">'
                                 + '<h6 class="text-bold">' + title + '</h6>'
                                 + resume
                                 + '</a>'
                                 + '<div class="card-interaction-ms">'
                                 + '<span><i class="icon-heart"></i>'
                                 + '<small class="text-dark">1.987</small></span>'
                                 + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                                 + '</div>'
                                 + '</div>'
                                 + '</div>'
                                 + '</li>'
                                 );
                            break;
                        case 2:
                            $('#cardsMsCategory').append('<li>'
                                 + '<div class="card-ms card-article-ms">'
                                 + '<div class="card-img-ms">'
                                 + '<span class="card-label-filter-ms"></span>'
                                 + '<img src="' + imgCover + '" />'
                                 + '</div>'
                                 + '<div class="card-text-ms">'
                                 + '<a href="mundo-saludable/?/'+ link +'">'
                                 + '<h6 class="text-bold">' + title + '</h6>'
                                 + resume
                                 + '</a>'
                                 + '<div class="card-interaction-ms">'
                                 + '<span><i class="icon-heart"></i>'
                                 + '<small class="text-dark">1.987</small></span>'
                                 + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                                 + '</div>'
                                 + '</div>'
                                 + '</div>'
                                 + '</li>'
                                 );
                            break;
                        case 3:
                            $('#cardsMsCategory').append('<li>'
                                 + '<div class="'+ slugTag +'  card-ms card-article-ms ">'
                                 + '<div class="card-img-ms">'
                                 + '<span class="card-label-filter-ms">'+ nameTag +'</span>'
                                 + '404 Image not found"'
                                 + '</div>'
                                 + '<div class="card-text-ms">'
                                 + '<a href="mundo-saludable/?/'+ link +'">'
                                 + '<h6 class="text-bold">' + title + '</h6>'
                                 + resume
                                 + '</a>'
                                 + '<div class="card-interaction-ms">'
                                 + '<span><i class="icon-heart"></i>'
                                 + '<small class="text-dark">1.987</small></span>'
                                 + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                                 + '</div>'
                                 + '</div>'
                                 + '</div>'
                                 + '</li>'
                                 );
                            break;
                        case 4:
                            $('#cardsMsCategory').append('<li>'
                                 + '<div class="card-ms card-article-ms ">'
                                 + '<div class="card-img-ms">'
                                 + '<span class="card-label-filter-ms"></span>'
                                 + '<img src="" alt="404 Image not found"/>'
                                 + '</div>'
                                 + '<div class="card-text-ms">'
                                 + '<a href="mundo-saludable/?/'+ link +'">'
                                 + '<h6 class="text-bold">' + title + '</h6>'
                                 + resume
                                 + '</a>'
                                 + '<div class="card-interaction-ms">'
                                 + '<span><i class="icon-heart"></i>'
                                 + '<small class="text-dark">1.987</small></span>'
                                 + '<a class="text-jumbogreen" href="'+ link +'"><span>Ver<i class="icon-plus"></i></span></a>'
                                 + '</div>'
                                 + '</div>'
                                 + '</div>'
                                 + '</li>'
                                 );
                            break;
                        default:
                    }
                }
            });
        }
        $('#filterTitleCategorie').append('<h6 class="filter-title-ms">Filtrar Por</h6>');
        $( ".filter-title-ms" ).on( "click", function(e) {
                e.preventDefault();
                var $this = $(this);
                $this.parents('.container-filter-ms').toggleClass( "active-ms");
                });
        var ct =''
        for (var i = 0; i < 1; i++) {
            if (url[i].e_categories.length == 2) {
                ct += url[i].e_categories[1].name
            
            }
            else if(url[i].e_categories.length == 1) {
                 ct += url[i].e_categories[0].name
                }
            else{
                 ct += 'Sin Categoria'
                }
        }
        $('#titleCategorie').append('<h2 class="title-section-ms">' 
             + '<span>' 
             + '<i class="icon icon-blog">' 
             + '</i>' 
             + ct
             + '</span>' 
             + '</h2>');
        createItems(url);
        function createItems(slugTag,nameTag) {
            for (  var i=0; i < url.length; i++ ) {
                 for ( var j=0; j < url[i].e_tags.length; j++ ) {
                    var slugTag = url[i].e_tags[j].slug;
                    var nameTag = url[i].e_tags[j].name;
                    $('#filterTitleCategorie').append(
                        '<div class="filters-ms">'
                        +'<label>'
                        + nameTag
                        +'</label>'
                        +'<input type="checkbox" class="filtervalue" value=".' + slugTag +'"/>'
                        +'</div>'
                    );
                 }
            }
            

            var $output = $('#output');
            var $items;
            var $item = cardItem(url);
            // create one item for each

           // init Isotope
           var $container = $('#cardsMsCategory').isotope({
             itemSelector: '.card-article-ms'
           });
            // filter with selects and checkboxes
            var $checkboxes = $('.filtervalue');

            $checkboxes.change( function() {
              // map input values to an array
              var inclusives = [];
              // inclusive filters from checkboxes
              $checkboxes.each( function( i, elem ) {
                // if checkbox, use value if checked
                if ( elem.checked ) {
                  inclusives.push( elem.value );
                }
              });

              // combine inclusive filters
              var filterValue = inclusives.length ? inclusives.join(', ') : '*';

              $output.text( filterValue );
              $container.isotope({ filter: filterValue })
            });
            $items = $items ? $items.add( $item ) : $item;
        }
    }
    function shareText() {
        // plugin initialization with default options
       shareSelectedText('.article-content', {
           tooltipClass: '',    // cool, if you want to customize the tooltip
           sanitize: true,      // will sanitize the user selection to respect the Twitter Max length (recommended) 
           buttons: [           // services that you want to enable you can add : 
               'facebook', // - twitter, tumblr, buffer, stumbleupon, digg, reddit, linkedin, facebook
               'twitter',
               'linkedin'
               // 'buffer'
           ],
           anchorsClass: '',    // class given to each tooltip's links
           twitterUsername: '', // for twitter widget, will add 'via @twitterUsername' at the end of the tweet.
           facebookAppID: '459647324467614', // Can also be an HTML element inside the <head> tag of your page : <meta property="fb:APP_ID" content="YOUR_APP_ID"/>
           facebookDisplayMode: 'page', //can be 'popup' || 'page'
           tooltipTimeout: 250  //Timeout before that the tooltip appear in ms
       });
    };
    // callbacks pages
            $.get(urlPosts, function (homepost) {
                // if (window.location.pathname.indexOf("mundo-saludable") != -1){
                    cards(homepost);
                // };
            });
            $.get(urlPosts, function (homepost) {
                if (window.location.pathname.indexOf("blog") != -1){
                    filterCards(homepost);
                    $( "#titleCategorie").replaceWith( '<h2 class="title-section-ms"><span><i class="icon icon-blog"></i>Blog</span></h2>' );

                };
            });
            $.get(c3, function (yoDecidi) {
                if (window.location.pathname.indexOf("yo-decidi") != -1){
                    filterCards(yoDecidi);
                };
            });
            $.get(c4, function (yoQuiero) {
                if (window.location.pathname.indexOf("yo-quiero") != -1){
                    filterCards(yoQuiero);
                };
            });
            $.get(c2, function (yoPuedo) {
                if (window.location.pathname.indexOf("yo-puedo") != -1){
                    filterCards(yoPuedo);
                };
            });
            $.get(urlPosts, function (articulos) {
                if (window.location.pathname.indexOf("articulos") != -1){
                    shareText(articulos);
                };
            });
    })(jQuery);
}());
$( ".filter-title-ms-category" ).on( "click", function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.parents('.container-filter-ms-category').toggleClass( "active-ms");
        });
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