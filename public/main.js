
var data = {
	subStopNum : 24,
	subwayLoation : [
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
			{ xpoint_wgs : 37.516334, ypoint_wgs : 127.020114,"station_nm":"신사","fr_code":"337"}
		]	
}

var GANGNAM = new naver.maps.LatLng(37.497899, 127.027556);
var SAMSUNG = new naver.maps.LatLng(37.508890, 127.063151);


var map = new naver.maps.Map('map', {
	center: GANGNAM,
	zoom: 9
});

var range = function (){
	//37.535170, 126.872166  37.509036, 126.843110 목동
	//37.524884, 127.065899 37.483483, 127.025807 강남
	var basisBounds_NE = new naver.maps.LatLng(37.524884, 127.065899);
	var basisBounds_SW = new naver.maps.LatLng(37.483483, 127.025807);

	var coverBounds_NE = basisBounds_NE.destinationPoint(45, 600);
	var coverBounds_SW = basisBounds_SW.destinationPoint(225, 600);


	var basisRectangle = new naver.maps.Rectangle({
	    map: map,
	    bounds: new naver.maps.LatLngBounds(
	        basisBounds_NE,
	        basisBounds_SW
	    )
	});

	var coverRectangle = new naver.maps.Rectangle({
	    map: map,
	    bounds: new naver.maps.LatLngBounds(
	        coverBounds_NE,
	        coverBounds_SW
	    )
	});

	return {basis : basisRectangle, cover : coverRectangle};
}
var wholeRange = range();


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
	
	var E = wholeRange.basis.bounds.east();
	var W = wholeRange.basis.bounds.west();
	var S = wholeRange.basis.bounds.south();
	var N = wholeRange.basis.bounds.north();

	E = (E-127)*1000000;
	W = (W-127)*1000000;
	S = (S-37)*1000000;
	N = (N-37)*1000000;

	var result = new naver.maps.LatLng(37+(getRandomInt(N,S)/1000000), 127+(getRandomInt(E,W))/1000000);

	return result;
}

var createCircle = function(){
	
	var location = getRandomLocation();

	var circle = new naver.maps.Circle({
	    map: map,
	    center: location,
	    radius: 400,

	    strokeColor: '#5347AA',
	    strokeOpacity: 0.5,
	    strokeWeight: 2,
	});

	return InRangeSubway(location);
}

var InRangeSubway = function(targetPoint){
	var cnt = 0;

	for( var i=0; i< data.subStopNum; i++ ){
		var temp = new naver.maps.LatLng(data.subwayLoation[i].xpoint_wgs, data.subwayLoation[i].ypoint_wgs);
		if( distance(targetPoint, temp) <= 400 ){
			cnt++;
		}
	}

	return cnt;
}



$(document).ready(function(){
	var cntClick = 0;
	var sumOfStopCnt = 0;

	$('#addBtn').click(function(){
		cntClick++;
		var result = createCircle();
		sumOfStopCnt += result;
		$("#cntClick").text(cntClick);
		$("#cntStop").text(result);
	});

	$('#resultBtn').click(function(){
		var result = sumOfStopCnt/cntClick;
		$(".result").text(result.toFixed(4));
	})

})


