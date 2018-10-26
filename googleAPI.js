//<script src="https://maps.googleapis.com/maps/api/js?key=Your_Key&libraries=geometry"></script>

var basisCircleRadius = 3000;
var targetRadius = 1000;
var map;
var base;

var center_1 = new google.maps.LatLng(48.869216, 2.309427); //"Franklin D. Roosevelt"


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: center_1});


////////////////////////////// sampling code ///////////////////////////////////////
//you should block this code when runing main code//

   //  google.maps.event.addListener(map,'click',function(ele){

   //   var marker = new google.maps.Marker({
   //     map : map,
   //     position : ele.latLng
   //   });

    //  console.log("{ xpoint_wgs : ", ele.latLng.lat(), ", ypoint_wgs : " , ele.latLng.lng() , " } ");
    // });

///////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////// sampling code ///////////////////////////////////////
//you should block this code when runing main code//

  // var bounds = new google.maps.Polyline({
  //  map : map,
  //  path : [ coverCircle.getBounds().getNorthEast(), new google.maps.LatLng(coverCircle.getBounds().getNorthEast().lat(), coverCircle.getBounds().getSouthWest().lng()),
  //  coverCircle.getBounds().getSouthWest(), new google.maps.LatLng(coverCircle.getBounds().getSouthWest().lat(), coverCircle.getBounds().getNorthEast().lng()), 
  //  coverCircle.getBounds().getNorthEast() ]
  // })

 //  basisCircle.setMap(null);
 //  coverCircle.setMap(null);

///////////////////////////////////////////////////////////////////////////////////////

  return { basis : basisCircle, cover : coverCircle }
}

function distance(point_1, point_2){
  var result = google.maps.geometry.spherical.computeDistanceBetween( 
    new google.maps.LatLng(point_1.lat(), point_1.lng()), new google.maps.LatLng(point_2.lat(), point_2.lng()) );

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

  for( var i=0; i<stopData.subwayLocation.length; i++){
    var temp = new google.maps.LatLng(stopData.subwayLocation[i].xpoint_wgs, stopData.subwayLocation[i].ypoint_wgs);
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

