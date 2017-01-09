var axios = require('axios');

var lat;
var lon;
var url;

console.log("Local Weather Command Line App");

axios.get('http://ip-api.com/json')
  .then(function (response) {
    lat = response.data.lat;
    lon = response.data.lon;

	url = "http://api.openweathermap.org/data/2.5/weather?";
	url += "lat=" + lat;
	url += "&lon=" + lon;
	url += "&units=metric&appid=af5d63aa5eef14df6719131f7cc4c5a2";

	axios.get(url)
	 	.then(function (response) {
	    	console.log(response.data.name + ", " + response.data.sys.country);
	    	console.log(response.data.main.temp + " Degree Celsius");
	    	console.log(response.data.weather[0].description);
	  	})
		.catch(function (error) {
			console.log("An error occurred 2");
	    	console.log(error);
	  	});
  	})

  .catch(function (error) {
  	console.log("An error occurred");
    console.log(error);
  });

  