//<script src="https://maps.googleapis.com/maps/api/js?key=Your_Key&libraries=geometry"></script>
var data = {
  subwayLocation : [
      //파리

    { xpoint_wgs :  48.897142, ypoint_wgs :  2.359185 }, { xpoint_wgs :  48.897565, ypoint_wgs :  2.344679 },
    { xpoint_wgs :  48.893897, ypoint_wgs :  2.347726 }, { xpoint_wgs :  48.892571, ypoint_wgs :  2.344722 }, 
    { xpoint_wgs :  48.891188, ypoint_wgs :  2.349572 }, { xpoint_wgs :  48.890511, ypoint_wgs :  2.360086 }, 
    { xpoint_wgs :  48.892768, ypoint_wgs :  2.327299 }, { xpoint_wgs :  48.889792, ypoint_wgs :  2.338650 }, 
    { xpoint_wgs :  48.887661, ypoint_wgs :  2.325453 }, { xpoint_wgs :  48.887210, ypoint_wgs :  2.349700 }, 
    { xpoint_wgs :  48.884444, ypoint_wgs :  2.338628 }, { xpoint_wgs :  48.882412, ypoint_wgs :  2.337555 }, 
    { xpoint_wgs :  48.882892, ypoint_wgs :  2.343993 }, { xpoint_wgs :  48.883795, ypoint_wgs :  2.350559 }, 
    { xpoint_wgs :  48.884444, ypoint_wgs :  2.360558 }, { xpoint_wgs :  48.883654, ypoint_wgs :  2.327513 }, 
    { xpoint_wgs :  48.882299, ypoint_wgs :  2.321226 }, { xpoint_wgs :  48.890511, ypoint_wgs :  2.320046 }, 
    { xpoint_wgs :  48.894405, ypoint_wgs :  2.313716 }, { xpoint_wgs :  48.881199, ypoint_wgs :  2.315368 }, 
    { xpoint_wgs :  48.883061, ypoint_wgs :  2.308931 }, { xpoint_wgs :  48.883993, ypoint_wgs :  2.304124 }, 
    { xpoint_wgs :  48.879251, ypoint_wgs :  2.303566 }, { xpoint_wgs :  48.878884, ypoint_wgs :  2.322750 }, 
    { xpoint_wgs :  48.879618, ypoint_wgs :  2.326741 }, { xpoint_wgs :  48.874538, ypoint_wgs :  2.321376 }, 
    { xpoint_wgs :  48.876316, ypoint_wgs :  2.325367 }, { xpoint_wgs :  48.874030, ypoint_wgs :  2.315754 }, 
    { xpoint_wgs :  48.872364, ypoint_wgs :  2.310047 }, { xpoint_wgs :  48.875187, ypoint_wgs :  2.329015 }, 
    { xpoint_wgs :  48.872421, ypoint_wgs :  2.329916 }, { xpoint_wgs :  48.876372, ypoint_wgs :  2.333092 }, 
    { xpoint_wgs :  48.877953, ypoint_wgs :  2.298417 }, { xpoint_wgs :  48.872054, ypoint_wgs :  2.300477 }, 
    { xpoint_wgs :  48.884698, ypoint_wgs :  2.297773 }, { xpoint_wgs :  48.875610, ypoint_wgs :  2.289361 }, 
    { xpoint_wgs :  48.871659, ypoint_wgs :  2.293481 }, { xpoint_wgs :  48.880408, ypoint_wgs :  2.309489 }, 
    { xpoint_wgs :  48.885545, ypoint_wgs :  2.292644 }, { xpoint_wgs :  48.885418, ypoint_wgs :  2.298009 }, 
    { xpoint_wgs :  48.888762, ypoint_wgs :  2.288053 }, { xpoint_wgs :  48.897283, ypoint_wgs :  2.280306 }, 
    { xpoint_wgs :  48.892176, ypoint_wgs :  2.285027 }, { xpoint_wgs :  48.884698, ypoint_wgs :  2.260737 }, 
    { xpoint_wgs :  48.881255, ypoint_wgs :  2.271595 }, { xpoint_wgs :  48.877911, ypoint_wgs :  2.284405 }, 
    { xpoint_wgs :  48.869993, ypoint_wgs :  2.285542 }, { xpoint_wgs :  48.866944, ypoint_wgs :  2.290177 }, 
    { xpoint_wgs :  48.871856, ypoint_wgs :  2.277195 }, { xpoint_wgs :  48.870882, ypoint_wgs :  2.275564 }, 
    { xpoint_wgs :  48.864093, ypoint_wgs :  2.278332 }, { xpoint_wgs :  48.864319, ypoint_wgs :  2.272109 }, 
    { xpoint_wgs :  48.863274, ypoint_wgs :  2.286357 }, { xpoint_wgs :  48.857995, ypoint_wgs :  2.274127 }, 
    { xpoint_wgs :  48.857472, ypoint_wgs :  2.285757 }, { xpoint_wgs :  48.856569, ypoint_wgs :  2.275199 }, 
    { xpoint_wgs :  48.855468, ypoint_wgs :  2.270114 }, { xpoint_wgs :  48.852489, ypoint_wgs :  2.268161 }, 
    { xpoint_wgs :  48.847123, ypoint_wgs :  2.272796 }, { xpoint_wgs :  48.847236, ypoint_wgs :  2.268977 }, 
    { xpoint_wgs :  48.845033, ypoint_wgs :  2.266488 }, { xpoint_wgs :  48.845146, ypoint_wgs :  2.261638 }, 
    { xpoint_wgs :  48.842971, ypoint_wgs :  2.260050 }, { xpoint_wgs :  48.846304, ypoint_wgs :  2.276873 }, 
    { xpoint_wgs :  48.853223, ypoint_wgs :  2.280006 }, { xpoint_wgs :  48.846106, ypoint_wgs :  2.277646 }, 
    { xpoint_wgs :  48.846615, ypoint_wgs :  2.285928 }, { xpoint_wgs :  48.853929, ypoint_wgs :  2.289361 }, 
    { xpoint_wgs :  48.850455, ypoint_wgs :  2.293524 }, { xpoint_wgs :  48.844779, ypoint_wgs :  2.293696 }, 
    { xpoint_wgs :  48.855171, ypoint_wgs :  2.289190 }, { xpoint_wgs :  48.846996, ypoint_wgs :  2.295198 }, 
    { xpoint_wgs :  48.848761, ypoint_wgs :  2.298910 }, { xpoint_wgs :  48.842731, ypoint_wgs :  2.291786 }, 
    { xpoint_wgs :  48.841121, ypoint_wgs :  2.287881 }, { xpoint_wgs :  48.838763, ypoint_wgs :  2.282066 }, 
    { xpoint_wgs :  48.837322, ypoint_wgs :  2.296571 }, { xpoint_wgs :  48.847518, ypoint_wgs :  2.302966 }, 
    { xpoint_wgs :  48.839582, ypoint_wgs :  2.301206 }, { xpoint_wgs :  48.841672, ypoint_wgs :  2.307944 }, 
    { xpoint_wgs :  48.847095, ypoint_wgs :  2.307429 }, { xpoint_wgs :  48.845654, ypoint_wgs :  2.309489 }, 
    { xpoint_wgs :  48.835543, ypoint_wgs :  2.277946 }, { xpoint_wgs :  48.839356, ypoint_wgs :  2.270607 }, 
    { xpoint_wgs :  48.847942, ypoint_wgs :  2.264084 }, { xpoint_wgs :  48.837972, ypoint_wgs :  2.257046 }, 
    { xpoint_wgs :  48.856894, ypoint_wgs :  2.315368 }, { xpoint_wgs :  48.858390, ypoint_wgs :  2.323179 }, 
    { xpoint_wgs :  48.866549, ypoint_wgs :  2.322492 }, { xpoint_wgs :  48.861298, ypoint_wgs :  2.320346 }, 
    { xpoint_wgs :  48.860508, ypoint_wgs :  2.325410 }, { xpoint_wgs :  48.854889, ypoint_wgs :  2.306442 }, 
    { xpoint_wgs :  48.870501, ypoint_wgs :  2.325196 }, { xpoint_wgs :  48.867537, ypoint_wgs :  2.313308 }, 
    { xpoint_wgs :  48.864686, ypoint_wgs :  2.301249 }, { xpoint_wgs :  48.869231, ypoint_wgs :  2.309403 }, 
    { xpoint_wgs :  48.848902, ypoint_wgs :  2.321033 }, { xpoint_wgs :  48.848309, ypoint_wgs :  2.327728 }, 
    { xpoint_wgs :  48.847038, ypoint_wgs :  2.326912 }, { xpoint_wgs :  48.844694, ypoint_wgs :  2.328758 }, 
    { xpoint_wgs :  48.842237, ypoint_wgs :  2.329015 }, { xpoint_wgs :  48.844553, ypoint_wgs :  2.317771 }, 
    { xpoint_wgs :  48.851274, ypoint_wgs :  2.326784 }, { xpoint_wgs :  48.851416, ypoint_wgs :  2.330946 }, 
    { xpoint_wgs :  48.846897, ypoint_wgs :  2.316699 }, { xpoint_wgs :  48.853731, ypoint_wgs :  2.333736 }, 
    { xpoint_wgs :  48.853053, ypoint_wgs :  2.335667 }, { xpoint_wgs :  48.852234, ypoint_wgs :  2.339315 }, 
    { xpoint_wgs :  48.845570, ypoint_wgs :  2.339787 }, { xpoint_wgs :  48.841164, ypoint_wgs :  2.324938 }, 
    { xpoint_wgs :  48.841023, ypoint_wgs :  2.320346 }, { xpoint_wgs :  48.834257, ypoint_wgs :  2.318544 }, 
    { xpoint_wgs :  48.838876, ypoint_wgs :  2.322278 }, { xpoint_wgs :  48.839822, ypoint_wgs :  2.337019 }, 
    { xpoint_wgs :  48.838523, ypoint_wgs :  2.360730 }, { xpoint_wgs :  48.835627, ypoint_wgs :  2.358391 }, 
    { xpoint_wgs :  48.835924, ypoint_wgs :  2.352533 }, { xpoint_wgs :  48.840542, ypoint_wgs :  2.351524 }, 
    { xpoint_wgs :  48.843197, ypoint_wgs :  2.352190 }, { xpoint_wgs :  48.845993, ypoint_wgs :  2.354829 }, 
    { xpoint_wgs :  48.850229, ypoint_wgs :  2.348005 }, { xpoint_wgs :  48.838989, ypoint_wgs :  2.330732 }, 
    { xpoint_wgs :  48.851119, ypoint_wgs :  2.344336 }, { xpoint_wgs :  48.853576, ypoint_wgs :  2.344915 }, 
    { xpoint_wgs :  48.855221, ypoint_wgs :  2.347147 }, { xpoint_wgs :  48.858559, ypoint_wgs :  2.342190 }, 
    { xpoint_wgs :  48.863726, ypoint_wgs :  2.348928 }, { xpoint_wgs :  48.862060, ypoint_wgs :  2.347126 }, 
    { xpoint_wgs :  48.862427, ypoint_wgs :  2.345623 }, { xpoint_wgs :  48.860733, ypoint_wgs :  2.340903 }, 
    { xpoint_wgs :  48.862682, ypoint_wgs :  2.336783 }, { xpoint_wgs :  48.862089, ypoint_wgs :  2.353949 }, 
    { xpoint_wgs :  48.865477, ypoint_wgs :  2.356052 }, { xpoint_wgs :  48.857345, ypoint_wgs :  2.352318 }, 
    { xpoint_wgs :  48.858616, ypoint_wgs :  2.347426 }, { xpoint_wgs :  48.855341, ypoint_wgs :  2.360215 }, 
    { xpoint_wgs :  48.851670, ypoint_wgs :  2.361888 }, { xpoint_wgs :  48.870784, ypoint_wgs :  2.361030 }, 
    { xpoint_wgs :  48.872477, ypoint_wgs :  2.355966 }, { xpoint_wgs :  48.876401, ypoint_wgs :  2.358412 }, 
    { xpoint_wgs :  48.869485, ypoint_wgs :  2.353477 }, { xpoint_wgs :  48.870558, ypoint_wgs :  2.348799 }, 
    { xpoint_wgs :  48.871264, ypoint_wgs :  2.344679 }, { xpoint_wgs :  48.877276, ypoint_wgs :  2.349143 }, 
    { xpoint_wgs :  48.876062, ypoint_wgs :  2.343993 }, { xpoint_wgs :  48.874989, ypoint_wgs :  2.340087 }, 
    { xpoint_wgs :  48.868751, ypoint_wgs :  2.341203 }, { xpoint_wgs :  48.866465, ypoint_wgs :  2.351675 }, 
    { xpoint_wgs :  48.869598, ypoint_wgs :  2.335882 }, { xpoint_wgs :  48.876062, ypoint_wgs :  2.337684 }, 
    { xpoint_wgs :  48.865731, ypoint_wgs :  2.334423 }, { xpoint_wgs :  48.883739, ypoint_wgs :  2.332921 }, 
    { xpoint_wgs :  48.878292, ypoint_wgs :  2.337384 }, { xpoint_wgs :  48.872971, ypoint_wgs :  2.333221 }, 
    { xpoint_wgs :  48.870882, ypoint_wgs :  2.332212 }, { xpoint_wgs :  48.872012, ypoint_wgs :  2.339358 }, 
    { xpoint_wgs :  48.851472, ypoint_wgs :  2.314252 }, { xpoint_wgs :  48.862131, ypoint_wgs :  2.314918 }, 
    { xpoint_wgs :  48.857938, ypoint_wgs :  2.310175 }, { xpoint_wgs :  48.862653, ypoint_wgs :  2.301270 }, 
    { xpoint_wgs :  48.867551, ypoint_wgs :  2.346525 }, { xpoint_wgs :  48.866620, ypoint_wgs :  2.361545 }, 
    { xpoint_wgs :  48.879153, ypoint_wgs :  2.362082 }, { xpoint_wgs :  48.873613, ypoint_wgs :  2.328253 }, 
    { xpoint_wgs :  48.864263, ypoint_wgs :  2.330163 }, { xpoint_wgs :  48.848253, ypoint_wgs :  2.258720 }, 
    { xpoint_wgs :  48.846622, ypoint_wgs :  2.351632 }, { xpoint_wgs :  48.855616, ypoint_wgs :  2.325646 }, 
    { xpoint_wgs :  48.864757, ypoint_wgs :  2.293803 }, { xpoint_wgs :  48.903517, ypoint_wgs :  2.305798 }, 
    { xpoint_wgs :  48.879929, ypoint_wgs :  2.358380 }, { xpoint_wgs :  48.897374, ypoint_wgs :  2.328919 }, 
    { xpoint_wgs :  48.842901, ypoint_wgs :  2.312600 }, { xpoint_wgs :  48.887615, ypoint_wgs :  2.314161 }, 
    { xpoint_wgs :  48.896810, ypoint_wgs :  2.298127 }, { xpoint_wgs :  48.880952, ypoint_wgs :  2.355322 }, 
    { xpoint_wgs :  48.838509, ypoint_wgs :  2.315926 }, 
  ]
}

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

