var basisCircleRadius = 3000;
var targetRadius = 1000;
var map;
var base;

var pi = 3.14159265358979323846;
var RadiusLatLng = 0.0269494585236; //3km
var RadiusLatLngSub = 0.0070229049849; //위도에 따른 오차
var rectDistance = 0.02081721268 + 0.0269494585236;

var center_1 = new google.maps.LatLng(48.909583, 2.239795); //"Gare de La Défense"

function initMap(){
   map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: center_1});
   base = range_new();

}

function range_new(){
  var basisRect = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillOpacity:0,

    map: map,
    bounds: new google.maps.LatLngBounds( new google.maps.LatLng(center_1.lat() - (rectDistance/2), center_1.lng() - (rectDistance/2) - RadiusLatLngSub),  new google.maps.LatLng(center_1.lat() + (rectDistance/2), center_1.lng() + (rectDistance/2) + RadiusLatLngSub ) )
  });

  return basisRect;
}

function distance(point_1, point_2){
  var result = google.maps.geometry.spherical.computeDistanceBetween( 
    new google.maps.LatLng(point_1.lat(), point_1.lng()), new google.maps.LatLng(point_2.lat(), point_2.lng()) );

  return result;
}

function getRandom(from, end ){
  return Math.random() * ( end - from ) + from;
}

function getRandomLocation(){
  var lat = getRandom(center_1.lat() - (rectDistance/2), center_1.lat() + (rectDistance/2) );
  var lng = getRandom(center_1.lng() - (rectDistance/2), center_1.lng() + (rectDistance/2) );

  var sub = getRandom(-RadiusLatLngSub, RadiusLatLngSub);

  var result = new google.maps.LatLng( lat, lng+sub );
  return result;
}

function createCircle(){
  var location = getRandomLocation();

  var randomLocationCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,

    map: map,
    center: location,
    radius: targetRadius
  });

  pointArray.push(randomLocationCircle);

  return InRangeSubway(location);

}

function InRangeSubway(targetPoint){
  var cnt = 0;

  for( var i=0; i<stopData.subwayLocation.length; i++){
    var temp = new google.maps.LatLng(stopData.subwayLocation[i].xpoint_wgs, stopData.subwayLocation[i].ypoint_wgs);
    if( distance(targetPoint, temp) <= targetRadius ){
      cnt++;
    }
  }
  return cnt;
}

var pointArray = []

var extractPoint = function(num){
  
  var randLocation;
  var cntPoint = 0;
  var totalStop = 0;

  pointArray.forEach(function(ele){ ele.setMap(null) });
  pointArray.splice(0,pointArray.length);
  
  while(1){
    if( cntPoint === num){
      break;
    }
    randLocation = createCircle();

    if( randLocation >= 0 ){
      cntPoint++;
      totalStop += randLocation;
    }
  }

  var result = totalStop/cntPoint;

  $("#cntPoint").text(cntPoint);
  $("#totalStop").text(totalStop);
  $("#result").text(result.toFixed(4));
}

$(document).ready(function(){
  initMap();

  $('#addBtn10').click(function(){
    extractPoint(10);
  });

  $('#addBtn20').click(function(){
    extractPoint(20);
  });

  $('#addBtn50').click(function(){
    extractPoint(50);
  });

  $('#addBtn100').click(function(){
    extractPoint(100);
  });

  $('#addBtn200').click(function(){
    extractPoint(200);
  });

  $('#addBtn500').click(function(){
    extractPoint(500);
  });

  $('#addBtn1000').click(function(){
    extractPoint(1000);
  });

})