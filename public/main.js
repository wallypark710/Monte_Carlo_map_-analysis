
var data = {
	subwayLocation : [
			//강남

			// { xpoint_wgs : 37.484147, ypoint_wgs : 127.034631,"station_nm":"양재","fr_code":"D8"},
			// { xpoint_wgs : 37.489116, ypoint_wgs : 127.066140,"station_nm":"개포동","fr_code":"k219"},
			// { xpoint_wgs : 37.486839, ypoint_wgs : 127.058856,"station_nm":"구룡","fr_code":"k218"},
			// { xpoint_wgs : 37.490858, ypoint_wgs : 127.055381,"station_nm":"도곡","fr_code":"K217"},
			// { xpoint_wgs : 37.486947, ypoint_wgs : 127.046769,"station_nm":"매봉","fr_code":"343"},
			// { xpoint_wgs : 37.494612, ypoint_wgs : 127.063642,"station_nm":"대치","fr_code":"345"},
			// { xpoint_wgs : 37.496237, ypoint_wgs : 127.052873,"station_nm":"한티","fr_code":"k216"},
			// { xpoint_wgs : 37.496663, ypoint_wgs : 127.070594,"station_nm":"학여울","fr_code":"346"},
			// { xpoint_wgs : 37.497175, ypoint_wgs : 127.027926,"station_nm":"강남","fr_code":"D7"},
			// { xpoint_wgs : 37.504503, ypoint_wgs : 127.049008,"station_nm":"선릉","fr_code":"220"},
			// { xpoint_wgs : 37.500622, ypoint_wgs : 127.036456,"station_nm":"역삼","fr_code":"221"},
			// { xpoint_wgs : 37.508844, ypoint_wgs : 127.063160,"station_nm":"삼성","fr_code":"219"},
			// { xpoint_wgs : 37.504598, ypoint_wgs : 127.025060,"station_nm":"신논현","fr_code":"925"},
			// { xpoint_wgs : 37.507287, ypoint_wgs : 127.033868,"station_nm":"언주","fr_code":"926"},
			// { xpoint_wgs : 37.513011, ypoint_wgs : 127.053282,"station_nm":"삼성중앙","fr_code":"928"},
			// { xpoint_wgs : 37.514219, ypoint_wgs : 127.060245,"station_nm":"봉은사","fr_code":"929"},
			// { xpoint_wgs : 37.510980, ypoint_wgs : 127.043593,"station_nm":"선정릉","fr_code":"927"},
			// { xpoint_wgs : 37.519365, ypoint_wgs : 127.053350,"station_nm":"청담","fr_code":"729"},
			// { xpoint_wgs : 37.517186, ypoint_wgs : 127.041280,"station_nm":"강남구청","fr_code":"K213"},
			// { xpoint_wgs : 37.514229, ypoint_wgs : 127.031656,"station_nm":"학동","fr_code":"731"},
			// { xpoint_wgs : 37.511093, ypoint_wgs : 127.021415,"station_nm":"논현","fr_code":"732"},
			// { xpoint_wgs : 37.527381, ypoint_wgs : 127.040534,"station_nm":"압구정로데오","fr_code":"K212"},
			// { xpoint_wgs : 37.527072, ypoint_wgs : 127.028461,"station_nm":"압구정","fr_code":"336"},
			// { xpoint_wgs : 37.516334, ypoint_wgs : 127.020114,"station_nm":"신사","fr_code":"337"},
			// { xpoint_wgs : 37.512759, ypoint_wgs : 127.011220,"station_nm":"잠원","fr_code":"338"},
			// { xpoint_wgs : 37.508178, ypoint_wgs : 127.011727,"station_nm":"반포","fr_code":"733"},
			// { xpoint_wgs : 37.504206, ypoint_wgs : 127.015259,"station_nm":"사평","fr_code":"924"},
			// { xpoint_wgs : 37.504810, ypoint_wgs : 127.004943,"station_nm":"고속터미널","fr_code":"923"},
			// { xpoint_wgs : 37.493415, ypoint_wgs : 127.014080,"station_nm":"교대","fr_code":"223"},
			// { xpoint_wgs : 37.491897, ypoint_wgs : 127.007917,"station_nm":"서초","fr_code":"224"},
			// { xpoint_wgs : 37.485013, ypoint_wgs : 127.016189,"station_nm":"남부터미널","fr_code":"341"},
			// { xpoint_wgs : 37.540685, ypoint_wgs : 127.017965,"station_nm":"옥수","fr_code":"K114"},
			// { xpoint_wgs : 37.529430, ypoint_wgs : 127.009169,"station_nm":"한남","fr_code":"K113"},
			// { xpoint_wgs : 37.503415, ypoint_wgs : 126.995925,"station_nm":"신반포","fr_code":"922"},
			// { xpoint_wgs : 37.510997, ypoint_wgs : 127.073642,"station_nm":"종합운동장","fr_code":"218"},
			// { xpoint_wgs : 37.531540, ypoint_wgs : 127.066704,"station_nm":"뚝섬유원지","fr_code":"728"},

			//시청

			// { xpoint_wgs : 37.589066, ypoint_wgs : 126.943736,"station_nm":"홍제","fr_code":"324"},
			// { xpoint_wgs : 37.582299, ypoint_wgs : 126.950291,"station_nm":"무악재","fr_code":"325"},
			// { xpoint_wgs : 37.574571, ypoint_wgs : 126.957748,"station_nm":"독립문","fr_code":"326"},
			// { xpoint_wgs : 37.575762, ypoint_wgs : 126.973530,"station_nm":"경복궁","fr_code":"327"},
			// { xpoint_wgs : 37.576477, ypoint_wgs : 126.985443,"station_nm":"안국","fr_code":"328"},
			// { xpoint_wgs : 37.559052, ypoint_wgs : 127.005602,"station_nm":"동대입구","fr_code":"332"},
			// { xpoint_wgs : 37.554340, ypoint_wgs : 127.010655,"station_nm":"약수","fr_code":"333"},
			// { xpoint_wgs : 37.548034, ypoint_wgs : 127.015872,"station_nm":"금호","fr_code":"334"},
			// { xpoint_wgs : 37.571607, ypoint_wgs : 126.991806,"station_nm":"종로3가","fr_code":"534"},
			// { xpoint_wgs : 37.566295, ypoint_wgs : 126.991910,"station_nm":"을지로3가","fr_code":"330"},
			// { xpoint_wgs : 37.561243, ypoint_wgs : 126.994280,"station_nm":"충무로","fr_code":"331"},
			// { xpoint_wgs : 37.553736, ypoint_wgs : 126.956820,"station_nm":"애오개","fr_code":"530"},
			// { xpoint_wgs : 37.565773, ypoint_wgs : 126.966641,"station_nm":"서대문","fr_code":"532"},
			// { xpoint_wgs : 37.571026, ypoint_wgs : 126.976669,"station_nm":"광화문","fr_code":"533"},
			// { xpoint_wgs : 37.560245, ypoint_wgs : 127.013828,"station_nm":"청구","fr_code":"634"},
			// { xpoint_wgs : 37.554548, ypoint_wgs : 127.020331,"station_nm":"신금호","fr_code":"538"},
			// { xpoint_wgs : 37.566941, ypoint_wgs : 126.998079,"station_nm":"을지로4가","fr_code":"535"},
			// { xpoint_wgs : 37.565138, ypoint_wgs : 127.007896,"station_nm":"동대문역사문화공원","fr_code":"536"},
			// { xpoint_wgs : 37.559973, ypoint_wgs : 126.963672,"station_nm":"충정로","fr_code":"531"},
			// { xpoint_wgs : 37.559783, ypoint_wgs : 126.942319,"station_nm":"신촌(경의중앙선)","fr_code":"P312"},
			// { xpoint_wgs : 37.551881, ypoint_wgs : 126.935711,"station_nm":"서강대","fr_code":"K313"},
			// { xpoint_wgs : 37.555134, ypoint_wgs : 126.936893,"station_nm":"신촌","fr_code":"240"},
			// { xpoint_wgs : 37.556733, ypoint_wgs : 126.946013,"station_nm":"이대","fr_code":"241"},
			// { xpoint_wgs : 37.557345, ypoint_wgs : 126.956141,"station_nm":"아현","fr_code":"242"},
			// { xpoint_wgs : 37.564718, ypoint_wgs : 126.977108,"station_nm":"시청","fr_code":"201"},
			// { xpoint_wgs : 37.572627, ypoint_wgs : 127.016429,"station_nm":"동묘앞","fr_code":"127"},
			// { xpoint_wgs : 37.566014, ypoint_wgs : 126.982618,"station_nm":"을지로입구","fr_code":"202"},
			// { xpoint_wgs : 37.565972, ypoint_wgs : 127.017820,"station_nm":"신당","fr_code":"206"},
			// { xpoint_wgs : 37.547771, ypoint_wgs : 126.942069,"station_nm":"대흥","fr_code":"625"},
			// { xpoint_wgs : 37.539261, ypoint_wgs : 126.961351,"station_nm":"효창공원앞","fr_code":"K826"},
			// { xpoint_wgs : 37.534675, ypoint_wgs : 126.986695,"station_nm":"녹사평","fr_code":"629"},
			// { xpoint_wgs : 37.534488, ypoint_wgs : 126.994302,"station_nm":"이태원","fr_code":"630"},
			// { xpoint_wgs : 37.539631, ypoint_wgs : 127.001725,"station_nm":"한강진","fr_code":"631"},
			// { xpoint_wgs : 37.548013, ypoint_wgs : 127.007055,"station_nm":"버티고개","fr_code":"632"},
			// { xpoint_wgs : 37.579661, ypoint_wgs : 127.015241,"station_nm":"창신","fr_code":"637"},
			// { xpoint_wgs : 37.544018, ypoint_wgs : 126.951592,"station_nm":"공덕","fr_code":"A02"},
			// { xpoint_wgs : 37.534777, ypoint_wgs : 126.973110,"station_nm":"삼각지","fr_code":"628"},
			// { xpoint_wgs : 37.529170, ypoint_wgs : 126.967894,"station_nm":"신용산","fr_code":"429"},
			// { xpoint_wgs : 37.588458, ypoint_wgs : 127.006221,"station_nm":"한성대입구","fr_code":"419"},
			// { xpoint_wgs : 37.582336, ypoint_wgs : 127.001844,"station_nm":"혜화","fr_code":"420"},
			// { xpoint_wgs : 37.560989, ypoint_wgs : 126.986325,"station_nm":"명동","fr_code":"424"},
			// { xpoint_wgs : 37.558514, ypoint_wgs : 126.978246,"station_nm":"회현","fr_code":"425"},
			// { xpoint_wgs : 37.544560, ypoint_wgs : 126.972106,"station_nm":"숙대입구","fr_code":"427"},
			// { xpoint_wgs : 37.571420, ypoint_wgs : 127.009745,"station_nm":"동대문","fr_code":"128"},
			// { xpoint_wgs : 37.554648, ypoint_wgs : 126.972559,"station_nm":"서울","fr_code":"133"},
			// { xpoint_wgs : 37.529849, ypoint_wgs : 126.964561,"station_nm":"용산","fr_code":"K110"},
			// { xpoint_wgs : 37.541021, ypoint_wgs : 126.971300,"station_nm":"남영","fr_code":"134"},
			// { xpoint_wgs : 37.570161, ypoint_wgs : 126.982923,"station_nm":"종각","fr_code":"131"},
			// { xpoint_wgs : 37.570926, ypoint_wgs : 127.001849,"station_nm":"종로5가","fr_code":"129"},



			//강북
			{ xpoint_wgs : 37.655128, ypoint_wgs : 127.061368,"station_nm":"노원","fr_code":"713"},
			{ xpoint_wgs : 37.625742, ypoint_wgs : 127.072896,"station_nm":"공릉","fr_code":"716"},
			{ xpoint_wgs : 37.677850, ypoint_wgs : 127.055315,"station_nm":"수락산","fr_code":"711"},
			{ xpoint_wgs : 37.664940, ypoint_wgs : 127.057675,"station_nm":"마들","fr_code":"712"},
			{ xpoint_wgs : 37.644583, ypoint_wgs : 127.064303,"station_nm":"중계","fr_code":"714"},
			{ xpoint_wgs : 37.636352, ypoint_wgs : 127.067990,"station_nm":"하계","fr_code":"715"},
			{ xpoint_wgs : 37.689313, ypoint_wgs : 127.046222,"station_nm":"도봉산","fr_code":"113"},
			{ xpoint_wgs : 37.623632, ypoint_wgs : 127.061835,"station_nm":"광운대","fr_code":"119"},
			{ xpoint_wgs : 37.633212, ypoint_wgs : 127.058831,"station_nm":"월계","fr_code":"118"},
			{ xpoint_wgs : 37.644799, ypoint_wgs : 127.051269,"station_nm":"녹천","fr_code":"117"},
			{ xpoint_wgs : 37.653166, ypoint_wgs : 127.047731,"station_nm":"창동","fr_code":"412"},
			{ xpoint_wgs : 37.667503, ypoint_wgs : 127.044273,"station_nm":"방학","fr_code":"115"},
			{ xpoint_wgs : 37.679563, ypoint_wgs : 127.045595,"station_nm":"도봉","fr_code":"114"},
			{ xpoint_wgs : 37.648627, ypoint_wgs : 127.034709,"station_nm":"쌍문","fr_code":"413"},
			{ xpoint_wgs : 37.638052, ypoint_wgs : 127.025732,"station_nm":"수유","fr_code":"414"},
			{ xpoint_wgs : 37.670272, ypoint_wgs : 127.079066,"station_nm":"당고개","fr_code":"409"},
			{ xpoint_wgs : 37.660878, ypoint_wgs : 127.073572,"station_nm":"상계","fr_code":"410"},



		]	
}

// 사람 걷기 속도 = 4 km/h.
// 5분 거리 = 1/3 km = 333 m
// 10분 거리 = 2/3 km = 667 m
// 15분 거리 = 1km = 1,000 m


var GANGNAM = new naver.maps.LatLng(37.497899, 127.027556);
var SAMSUNG = new naver.maps.LatLng(37.508890, 127.063151);

var center_1 = new naver.maps.LatLng(37.507284, 127.033917); // 언주역
var center_2 = new naver.maps.LatLng(37.564718, 126.977108); // 시청역
var center_3 = new naver.maps.LatLng(37.655128, 127.061368); // 노원역

var basisCircleRadius = 3000;   
var targetRadius = 1000;
var map;
var wholeRange;

var initMap = function(){
	map = new naver.maps.Map('map', {
		center: center_3,
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
	    center: center_3,
	    radius: basisCircleRadius,

	    strokeColor: '#5347AA',
	    strokeOpacity: 0.5,
	    strokeWeight: 2
	});

	var coverCircle = new naver.maps.Circle({
	    map: map,
	    center: center_3,
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

	for( var i=0; i< data.subwayLocation.length; i++ ){
		var temp = new naver.maps.LatLng(data.subwayLocation[i].xpoint_wgs, data.subwayLocation[i].ypoint_wgs);
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