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

var subFilters = [
    MiDiabetesFilter = {'contenedores':'.MiDiabetesFilter', 'filtros':'#MiDiabetesFilter'},
    MiEmbarazoFilter = {'contenedores':'.MiEmbarazoFilter', 'filtros':'#MiEmbarazoFilter'},
    MiCorazónFilter = {'contenedores':'.MiCorazónFilter', 'filtros':'#MiCorazónFilter'},
    MiDigestiónFilter = {'contenedores':'.MiDigestiónFilter', 'filtros':'#MiDigestiónFilter'},
    SerVegetarianaFilter = {'contenedores':'.SerVegetarianaFilter', 'filtros':'#SerVegetarianaFilter'},
    SerVeganaFilter = {'contenedores':'.SerVeganaFilter', 'filtros':'#SerVeganaFilter'},
    ComerKosherFilter = {'contenedores':'.ComerKosherFilter', 'filtros':'#ComerKosherFilter'},
    ComerHalalFilter = {'contenedores':'.ComerHalalFilter', 'filtros':'#ComerHalalFilter'},
    AdelgazarFilter = {'contenedores':'.AdelgazarFilter', 'filtros':'#AdelgazarFilter'},
    DesintoxicarmeFilter = {'contenedores':'.DesintoxicarmeFilter', 'filtros':'#DesintoxicarmeFilter'},
    AlimentarmeMejorFilter = {'contenedores':'.AlimentarmeMejorFilter', 'filtros':'#AlimentarmeMejorFilter'},
    PracticarUnDeporteFilter = {'contenedores':'.PracticarUnDeporteFilter', 'filtros':'#PracticarUnDeporteFilter'},
    CuidarAMiFamiliaFilter = {'contenedores':'.CuidarAMiFamiliaFilter', 'filtros':'#CuidarAMiFamiliaFilter'}
]
subFilters.forEach(function(subFilters, index) {
  console.log("Filtros " + index + " | Contenedores: " + subFilters.contenedores + " | Filtros: " + subFilters.filtros)
});     