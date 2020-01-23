$(document).ready(function(){
    setInterval(function(){
    
  $.ajax({
    url : "http://localhost/textwebsite/retrive.php",
    type : "GET",
    success : function(data){
      console.log(data);

      var time = [];
      var temperature_data = [];
//      var pressure_data = [];
//      var humidity_data = [];

      for(var i in data) {
        time.push("time " + data[i].time);
        temperature_data.push(data[i].temperature);
//        pressure_data.push(data[i].pressure);
//        humidity_data.push(data[i].humidity);
      }

      var chartdata = {
        labels: time,
        datasets: [
          {
            label: "temperature",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(59, 89, 152, 0.75)",
            borderColor: "rgba(59, 89, 152, 1)",
            pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
            pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            data: temperature_data
          }
        ]
      };

      var ctx = $("#mycanvas");
  
      var LineGraph = new Chart(ctx, {
        type: 'line',
        data: chartdata,
        options:{
            animation:{
                duration:0
            }
        }
      });
    },
    error : function(data) {

    }
  });
        }
    ,3000);
        
});