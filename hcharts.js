document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded');
  getWeather();
});

setInterval(getWeather,30*60*1000);

function getWeather(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "http://127.0.0.1:10002/realtime");
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        var response = xhr.responseText;
        var length = response.length;
        response = response.substr(9,length-9);
        response = JSON.parse(response);
        console.log(response);
        var time = [], rain = [], temperature = [], humidity = [], 
        pressure = [], windDirection = [], windSpeed = [];
        for(var i = 0; i < response.length-1; i++){
          time.unshift(response[i].time.substr(10,6));
          rain.unshift(response[i].rain1h);
          temperature.unshift(response[i].temperature);
          humidity.unshift(response[i].humidity);
          pressure.unshift(response[i].pressure);
          windDirection.unshift(response[i].windDirection);
          windSpeed.unshift(response[i].windSpeed);
        }   
        var json = hchartsConfig();
        json.xAxis.categories = time;
        json.series[0].data = rain;
        json.series[1].data = pressure;
        json.series[2].data = temperature;
        json.series[3].data = humidity;
        let myChart = Highcharts.chart('container', json);
      }
    }
  }
  xhr.send();
}
