(function() {
  var InitDeviceScan2;

  if (console.log) {
    console.log("Welcome to VTEX Speed! Have a nice day");
  }

  InitDeviceScan2 = function() {
    var ScreenMediaType, aux, href, pos;
    ScreenMediaType = 0;
    href = document.location.href;
    pos = href.indexOf("?");
    aux = "";
    if (DetectIphoneOrIpod()) {
      ScreenMediaType = 2;
    }
    if (DetectTierTablet()) {
      ScreenMediaType = 3;
    }
    if (DetectAndroidPhone()) {
      ScreenMediaType = 4;
    }
    if (DetectTierOtherPhones()) {
      ScreenMediaType = 5;
    }
    if (DetectBlackBerry()) {
      ScreenMediaType = 5;
    }
    if (ScreenMediaType !== 0) {
      if (pos !== -1) {
        aux = "&uam=true&mobile=" + ScreenMediaType;
      } else {
        aux = "?uam=true&mobile=" + ScreenMediaType;
      }
      document.location.href = href + aux;
    }
  };

  InitDeviceScan2();

}).call(this);
