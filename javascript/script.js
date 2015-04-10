function initialize() {
  var theirLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var myLatLng = new google.maps.LatLng(49.282729, -123.120738);
  var mapOptions = {
    zoom: 4,
    center: myLatLng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var theirMarker = new google.maps.Marker({
      position: theirLatlng,
      map: map,
      draggable:true,
      title: 'Hello World!',
      animation: google.maps.Animation.DROP
  });

  var myMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      draggable:true,
      title: 'Hello World!',
      animation: google.maps.Animation.DROP
  });
}

google.maps.event.addDomListener(window, 'load', initialize);