var weeklyQuakesEndpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
	$.get(weeklyQuakesEndpoint, function(responseData) {
		var passEarthquakes = responseData.features;
		
		var source = $('#earthquakeTitlesDisplay').html();
		var template = Handlebars.compile(source);
		var quakeHtml = template({ earthquake : passEarthquakes });
		

		console.log('generated html string:', quakeHtml);
		$("#earthquakeTitles").append(quakeHtml);
	});

   //  var marker = new google.maps.Marker({
   //  	forEach()
   //  position: myLatLng,
   //  map: map,
   //  title: 'Hello World!'
  	// });
});