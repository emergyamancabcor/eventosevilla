
var vars;
var temp;
var temp_min;
var temp_max;
var icon;
var description;
var weather;
var wind;
var deg;
var humidity;
var city;
var pressure;

$.ajax({
  type: "GET",
  url: "https://api.openweathermap.org/data/2.5/weather?id=2510911&APPID=97a44702a28b87a93b59c98f75e4966f&lang=es&units=metric",
  dataType: "json",
  success: function (data) {
    vars = data.main;
    temp = vars.temp;
    temp_min = Math.round(vars.temp_min);
    temp_max = Math.round(vars.temp_max);
    humidity = vars.humidity;
    wind = Math.round(data.wind.speed * 3.6)
    deg = data.wind.deg
    weather = data.weather ? data.weather[0] : undefined;
    city = data.name;
    pressure=Math.round(vars.pressure);

    if (weather) {
      icon = weather.icon
      description = weather.description
      description = description.charAt(0).toUpperCase() + description.slice(1)
      $('#weather-humidity-value').html(humidity + '%');
      $('#weather-icon-image').html('<img src="http://openweathermap.org/img/w/' + icon + '.png"></img><div class="weather-icon-image-subtitle">' + city + '</div>');
      $('#weather-description').html(description);
      $('#weather-wind-value').html(wind + ' KM/H')
      $('#weather-wind-value-2').html((deg ? deg : '0') + ' º')
      $('#weather-temperature-max-min').html(temp_min + 'º / ' + temp_max + 'º')
      $('#weather-air-quality-value').html(pressure + ' hPa');

    }

    console.log(data)
    console.log('description', description)

  },
  error: function (jqXHR, textStatus, errorThrown) {
    alert(errorThrown);
  }
});



