// funcion para intercambiar el logo al hacr scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 15) {
        $('.logo-area img').attr('src', '/arquivos/monkey-market-juguetes-logo-scroll-down.png');
        $('.logo-area').addClass('logo-horizontal');
        // $('#toggle-logo').removeClass('logo');
        // $('#toggle-logo').addClass('logo-scroll');
        // classe para links de la navegacion
        $('.categorydropadjust').addClass('categorydropadjust-scroll');
    }else{
        $('.logo-area img').attr('src', '/arquivos/monkey-market-juguetes-logo.png');
        $('.logo-area').removeClass('logo-horizontal');
         // $('#toggle-logo').addClass('logo');
         // classe para links de la navegacion
        // $('.categorydropadjust').removeClass('categorydropadjust-scroll',500);
    }
  });