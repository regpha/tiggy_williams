// function myMap() {
//     var mapCanvas = document.getElementById("cheshireMap");
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.2),
//         zoom: 10
//     };
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// }
//
//
//

function initMap() {
  // The location of Uluru
  var cheshire = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: cheshire});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: cheshire, map: map});
}

 async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgTA5Cei2VWbraQ0qlcR81y1PYdoc7Hl4&callback=initMap">
