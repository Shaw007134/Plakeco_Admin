document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded')
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "http://127.0.0.1:10002/realtime");
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        let response = xhr.responseText;
        let length = response.length;
        response = response.substr(9,length-9);
        response = JSON.parse(response);
        console.log(response);
        let time = [], rain = [], temperature = [], humidity = [], 
        pressure = [], windDirection = [], windSpeed = [];
        for(let i = 0; i < response.length-1; i++){
          time.unshift(response[i].time);
          rain.unshift(response[i].rain1h);
          temperature.unshift(response[i].temperature);
          humidity.unshift(response[i].humidity);
          pressure.unshift(response[i].pressure);
          windDirection.unshift(response[i].windDirection);
          windSpeed.unshift(response[i].windSpeed);
        }
        let myChart = Highcharts.chart('container', {
          chart: {
              type: 'line'
          },
          title: {
              text: '24hour RealTime'
          },
          xAxis: {
              categories: ['time']
          },
          yAxis: {
            categories: ['temperature','pressure','humidity']
          },
          series: [{
              name: 'temperature',
              data: temperature
          }]
      });
      }
    }
  }
  xhr.send();
});
