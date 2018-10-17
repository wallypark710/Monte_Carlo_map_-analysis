
//<script src="https://maps.googleapis.com/maps/api/js?key=Your_Key&libraries=geometry"></script>
var data = {
  subwayLocation : [
      { xpoint_wgs : 37.484147, ypoint_wgs : 127.034631,"station_nm":"양재","fr_code":"D8"},
      { xpoint_wgs : 37.489116, ypoint_wgs : 127.066140,"station_nm":"개포동","fr_code":"k219"},
      { xpoint_wgs : 37.486839, ypoint_wgs : 127.058856,"station_nm":"구룡","fr_code":"k218"},
      { xpoint_wgs : 37.490858, ypoint_wgs : 127.055381,"station_nm":"도곡","fr_code":"K217"},
      { xpoint_wgs : 37.486947, ypoint_wgs : 127.046769,"station_nm":"매봉","fr_code":"343"},
      { xpoint_wgs : 37.494612, ypoint_wgs : 127.063642,"station_nm":"대치","fr_code":"345"},
      { xpoint_wgs : 37.496237, ypoint_wgs : 127.052873,"station_nm":"한티","fr_code":"k216"},
      { xpoint_wgs : 37.496663, ypoint_wgs : 127.070594,"station_nm":"학여울","fr_code":"346"},
      { xpoint_wgs : 37.497175, ypoint_wgs : 127.027926,"station_nm":"강남","fr_code":"D7"},
      { xpoint_wgs : 37.504503, ypoint_wgs : 127.049008,"station_nm":"선릉","fr_code":"220"},
      { xpoint_wgs : 37.500622, ypoint_wgs : 127.036456,"station_nm":"역삼","fr_code":"221"},
      { xpoint_wgs : 37.508844, ypoint_wgs : 127.063160,"station_nm":"삼성","fr_code":"219"},
      { xpoint_wgs : 37.504598, ypoint_wgs : 127.025060,"station_nm":"신논현","fr_code":"925"},
      { xpoint_wgs : 37.507287, ypoint_wgs : 127.033868,"station_nm":"언주","fr_code":"926"},
      { xpoint_wgs : 37.513011, ypoint_wgs : 127.053282,"station_nm":"삼성중앙","fr_code":"928"},
      { xpoint_wgs : 37.514219, ypoint_wgs : 127.060245,"station_nm":"봉은사","fr_code":"929"},
      { xpoint_wgs : 37.510980, ypoint_wgs : 127.043593,"station_nm":"선정릉","fr_code":"927"},
      { xpoint_wgs : 37.519365, ypoint_wgs : 127.053350,"station_nm":"청담","fr_code":"729"},
      { xpoint_wgs : 37.517186, ypoint_wgs : 127.041280,"station_nm":"강남구청","fr_code":"K213"},
      { xpoint_wgs : 37.514229, ypoint_wgs : 127.031656,"station_nm":"학동","fr_code":"731"},
      { xpoint_wgs : 37.511093, ypoint_wgs : 127.021415,"station_nm":"논현","fr_code":"732"},
      { xpoint_wgs : 37.527381, ypoint_wgs : 127.040534,"station_nm":"압구정로데오","fr_code":"K212"},
      { xpoint_wgs : 37.527072, ypoint_wgs : 127.028461,"station_nm":"압구정","fr_code":"336"},
      { xpoint_wgs : 37.516334, ypoint_wgs : 127.020114,"station_nm":"신사","fr_code":"337"},
      { xpoint_wgs : 37.512759, ypoint_wgs : 127.011220,"station_nm":"잠원","fr_code":"338"},
      { xpoint_wgs : 37.508178, ypoint_wgs : 127.011727,"station_nm":"반포","fr_code":"733"},
      { xpoint_wgs : 37.504206, ypoint_wgs : 127.015259,"station_nm":"사평","fr_code":"924"},
      { xpoint_wgs : 37.504810, ypoint_wgs : 127.004943,"station_nm":"고속터미널","fr_code":"923"},
      { xpoint_wgs : 37.493415, ypoint_wgs : 127.014080,"station_nm":"교대","fr_code":"223"},
      { xpoint_wgs : 37.491897, ypoint_wgs : 127.007917,"station_nm":"서초","fr_code":"224"},
      { xpoint_wgs : 37.485013, ypoint_wgs : 127.016189,"station_nm":"남부터미널","fr_code":"341"}
    ] 
}

var basisCircleRadius = 3000;
var targetRadius = 333;
var map;
var base;

var center_1 = new google.maps.LatLng(37.507284, 127.033917);


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: center_1});

    base = range();
}


function range (){
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

function distance(point_1, point_2){
  var result = google.maps.geometry.spherical.computeDistanceBetween( 
    new google.maps.LatLng(point_1.lat(), point_1.lng()), new google.maps.LatLng(point_2.lat(), point_2.lng()) );

  console.log(result);
  return result;
}

function getRandomInt(from, end ){
  return parseInt( Math.random() * ( end - from ) + from );
}


function getRandomLocation(){
  
  var basisBounds_NE = base.basis.getBounds().getNorthEast();
  var basisBounds_SW = base.basis.getBounds().getSouthWest();
  
  var N = basisBounds_NE.lat();
  var S = basisBounds_SW.lat();
  var E = basisBounds_NE.lng();
  var W = basisBounds_SW.lng();

  E = (E-127)*1000000;
  W = (W-127)*1000000;
  S = (S-37)*1000000;
  N = (N-37)*1000000;

  var result = new google.maps.LatLng(37+(getRandomInt(N,S)/1000000), 127+(getRandomInt(E,W))/1000000 );

  return result;
}

function inRange(location, center){
  if( basisCircleRadius >= distance(location, center) ){
    return true;
  }
  return false;
}

function createCircle(){

  var location = getRandomLocation();

  if( inRange(location, base.basis.getCenter()) ){
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

  return -1;
}

function InRangeSubway(targetPoint){
  var cnt = 0;

  for( var i=0; i<data.subwayLocation.length; i++){
    var temp = new google.maps.LatLng(data.subwayLocation[i].xpoint_wgs, data.subwayLocation[i].ypoint_wgs);
    if( distance(targetPoint, temp) <= targetRadius ){
      cnt++;
    }
  }
  return cnt;
}

var pointArray = [];

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

