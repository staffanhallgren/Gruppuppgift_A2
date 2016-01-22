function initMap() {
  var myLatLng = {lat: 59.345300, lng: 18.023515};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng,
	disableDefaultUI: true,
	scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
	icon: 'media/img/map_marker.png'
  });
}