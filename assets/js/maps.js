function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(42.45763, -104.7634),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
}

myMap();
