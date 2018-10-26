
//<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=YOUR_ID&submodules=geocoder"></script>

var GANGNAM = new naver.maps.LatLng(37.497899, 127.027556);
var SAMSUNG = new naver.maps.LatLng(37.508890, 127.063151);

var center_1 = new naver.maps.LatLng(37.507284, 127.033917); // 언주역
var center_2 = new naver.maps.LatLng(37.564718, 126.977108); // 시청역
var center_3 = new naver.maps.LatLng(37.655128, 127.061368); // 노원역

var basisCircleRadius = 3000;   
var targetRadius = 333;
var map;
var wholeRange;

var initMap = function(){
	map = new naver.maps.Map('map', {
		center: center_1,
		zoom: 9
	});

	wholeRange = range();

	$("#cntPoint").text('');
	$("#totalStop").text('');
	$("#result").text('');
}
	

var range = function (){
	//37.535170, 126.872166  37.509036, 126.843110 목동
	//37.524884, 127.065899 37.483483, 127.025807 강남

	var basisCircle = new naver.maps.Circle({
	    map: map,
	    center: center_1,
	    radius: basisCircleRadius,

	    strokeColor: '#5347AA',
	    strokeOpacity: 0.5,
	    strokeWeight: 2
	});

	var coverCircle = new naver.maps.Circle({
	    map: map,
	    center: center_1,
	    radius: basisCircleRadius + targetRadius,

	    strokeColor: '#5347AA',
	    strokeOpacity: 0.5,
	    strokeWeight: 2
	});



	var marker1 = new naver.maps.Marker({
		map: map,
		position: basisCircle.getBounds().getNE()
	})


	var marker2 = new naver.maps.Marker({
		map: map,
		position: basisCircle.getBounds().getSW()
	})

	return {basis : basisCircle, cover : coverCircle};
	
}



var distance = function(point_1, point_2){
	var dis = map.getProjection();
	var result = dis.getDistance(point_1, point_2);
	// console.log(result);
	return result;
}

var getRandomInt = function(from, end ){
  return parseInt( Math.random() * ( end - from ) + from );
}


var getRandomLocation = function(){
	
	var E = wholeRange.basis.getBounds().east();
	var W = wholeRange.basis.getBounds().west();
	var S = wholeRange.basis.getBounds().south();
	var N = wholeRange.basis.getBounds().north();

	E = (E-127)*1000000;
	W = (W-127)*1000000;
	S = (S-37)*1000000;
	N = (N-37)*1000000;

	var result = new naver.maps.LatLng(37+(getRandomInt(N,S)/1000000), 127+(getRandomInt(E,W))/1000000);

	return result;
}

var inRange = function(location, center){
	if( basisCircleRadius >= distance(location, center) ){
		return true;
	}
	return false;
}

var createCircle = function(){
	
	var location = getRandomLocation();

	if( inRange(location, wholeRange.basis.getCenter()) ){
		var circle = new naver.maps.Circle({
		    map: map,
		    center: location,
		    radius: targetRadius,

		    strokeColor: '#5347AA',
		    strokeOpacity: 0.5,
		    strokeWeight: 2,
		});	

		pointArray.push(circle);
		return InRangeSubway(location);
	}

	return -1;
}

var InRangeSubway = function(targetPoint){
	var cnt = 0;

	for( var i=0; i< stopData.subwayLocation.length; i++ ){
		var temp = new naver.maps.LatLng(stopData.subwayLocation[i].xpoint_wgs, stopData.subwayLocation[i].ypoint_wgs);
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