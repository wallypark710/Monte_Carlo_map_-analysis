var basisCircleRadius = 3000;
var targetRadius = 1000;
var map;
var base;

var pi = 3.14159265358979323846;
var RadiusLatLng = 0.0269494585236; //3km
var RadiusLatLngSub = 0.0070229049849; //위도에 따른 오차

var center_1 = new google.maps.LatLng(37.507284, 127.033917); // 언주역

function initMap(){
	 map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: center_1});
	 base = range();

}

function range() {
	var basisCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity:0,

      map: map,
      center: center_1,
      radius: basisCircleRadius
    });

  var coverCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillOpacity:0,

        map: map,
        center: center_1,
        radius: basisCircleRadius + targetRadius

    });

  return { basis : basisCircle, cover : coverCircle }
}

function range_new(){
	var basisRect = new google.maps.Rectangle({
		strokeColor: '#FF0000',
      	strokeOpacity: 0.8,
      	strokeWeight: 2,
      	fillOpacity:0,

      	map: map,
      	bounds: basis.getBounds();
	})
}

function distance(point_1, point_2){
  var result = google.maps.geometry.spherical.computeDistanceBetween( 
    new google.maps.LatLng(point_1.lat(), point_1.lng()), new google.maps.LatLng(point_2.lat(), point_2.lng()) );

  return result;
}

function getRandom(from, end ){
  return Math.random() * ( end - from ) + from;
}

















	



