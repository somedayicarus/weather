


var url = "http://api.wunderground.com/api/c7fd682eb53c0810/forecast/q/94118.json";
function getWeather(url) {
	$.getJSON(url, function(data) {
		console.log(data);
		console.log(data.forecast.simpleforecast)
	})
}

getWeather(url);