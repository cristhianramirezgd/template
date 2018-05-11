    <?php require_once("subtemplates/head.php"); ?>
    <?php require_once("subtemplates/styles.php"); ?>
    <?php require_once("subtemplates/header.php"); ?>
    <section id="titleCategorie"></section>
    <main class="mundo-saludable-v2">
      <section class="catagory-ms">
        <aside class="wrapper-filter">
        <div class="sticky-filter-ms">
          <div class="container-filter-ms" id="filterTitleCategorie"></div>
        </div>
      </aside>
      <div class="container-category-ms" id="container-pagination">
        <ul class="container-card-article" id="cardsMs"></ul>
      </div>
      </section>
    </main>
    <?php require_once("subtemplates/footer.php"); ?>
    <?php require_once("subtemplates/scripts.php"); ?>
    <!-- librearies -->
    <script type="text/javascript" src="https://jumbocolombiafood.vtexcommercestable.com.br/arquivos/jquery.fancybox.min.js" charset="utf8"></script>
    <script type="text/javascript" src="https://jumbocolombiafood.vteximg.com.br/arquivos/slick.min.js" charset="utf8"></script>
    <script type="text/javascript" src="/speed/build/arquivos/app-mundosaludable.js" charset="utf8"></script>
    <script type="text/javascript">
      var apiPosts = 'https://catalogostiendasjumbo.co/tiendasjumboblog/wp-json/wp/v2/posts?categories=3'
      function msBlog() {
          $.getJSON( apiPosts, function(msg) {
              JsonpCallback(msg);
        });
      }
      function JsonpCallback(json) {
        $('#filterTitleCategorie').append('<h6 class="filter-title-ms">' 
          + json[0].e_categories[0].name
          + '</h6>'
          );
      for (var i = 0; i < json.length; i++) {
          $('#cardsMs').append('<li class="card-ms card-article-ms' + ' ' + json[i].e_tags[i].slug +'">'
              +'<div class="card-img-ms">'
              +'<span class="card-label-filter-ms">' + json[i].e_tags[0].name + ', ' + '</span>'
              +'<img src="' + json[i].better_featured_image.source_url + '" />'
              +'</div>'
              +'<div class="card-text-ms">'
              +'<a href="'+ json[i].link +'">'
              +'<h6 class="text-bold">' + json[i].title.rendered + '</h6>'
              + json[i].excerpt.rendered 
              +'</a>'
              +'<div class="card-interaction-ms">'
              +'<span><i class="icon-heart"></i>'
              +'<small class="text-dark">1.987</small></span>'
              +'<a class="text-jumbogreen" href="'+ json[i].link +'"><span>Ver<i class="icon-plus"></i></span></a>'
              +'</div>'
              +'</div>'
              +'</li>');
        $('#filterTitleCategorie').append(
          '<div class="filters-ms">'
          +'<label>'
          + json[i].e_tags[i].name 
          +'</label>'
          +' <input type="checkbox" value="' + json[i].e_tags[i].slug + '"/>'
          +'</div>'
          );
        
        };
          $( ".filter-title-ms" ).on( "click", function(e) {
              e.preventDefault();
              var $this = $(this);
            $this.parents('.container-filter-ms').toggleClass( "active-ms");
          });
        $('#titleCategorie').append('<h2 class="title-section-ms">' 
          + '<span>' 
          + '<i class="icon icon-blog">' 
          + '</i>' 
          + json[0].e_categories[0].name
          + '</span>' 
          + '</h2>');
      };
      msBlog();
    </script>
  </body>
</html>
