$(document).ready(function() {
  $.simpleWeather({
    woeid: '12761736', //12761736 which is Brooklyn
    unit: 'f',
    success: function(weather) {
      html = '<div class="row">' + '<div class="col">' + '<ul><li class="location-style">' + '<strong>Weather Report:</strong>' + ' ' + weather.city + ', ' + weather.region +
        '</li>' + '</div>' + '</div>'; //outputs the city name + state
      html += '<div class="row">' + '<div class="col-md-6">' + '<img class="svg-style" style width="150em" src="images/weathericons/' + weather.code + '.svg">' + '</div>'; //code returns # for corresponding svg icon
      html += '<div class="col-md-6">' + '<ul><li class="temp-style">' + weather.temp + '&deg;' + weather.units.temp + '</li>' + '<br>' + '</div>' + '</div>';
      //html += '<body>'+ '<img src="images/weatherbackgrounds/'+weather.code+'.png">' + '</body>'; // Background changes depending on weather code
      for (var i = 5; i < weather.forecast.length; i++) { //five day forecast includes weather icon, day, and temp high
        html += '<div class="col-md-1" "forecast-spacing">' + '<img style width="80em" src="images/weathericons/' + weather.forecast[i].code + '.svg">' +
          '<ul><li class="weekly-forecast">' + weather.forecast[i].day + '<br>' + weather.forecast[i].high + weather.units.temp + '</li>' + '<br>' + '</div>' + '</div>';
      }
      var timestamp = moment(weather.updated); //provides last update
      html += '<div class="row">' + '<div class="col">' + '<li class="weather-updated">' + 'Updated ' + moment(timestamp).fromNow() + '</div>' + '</div>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
});
