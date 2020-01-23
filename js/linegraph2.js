$(document).ready(function(){
    setInterval(function(){
    
  $.ajax({
    url : "http://localhost/textwebsite/retrive.php",
    type : "GET",
    success : function(data){
      console.log(data);

      var time = [];
      var temperature_data = [];
      var pressure_data = [];
      var humidity_data = [];

      for(var i in data) {
        time.push("time " + data[i].time);
        temperature_data.push(data[i].temperature);
        pressure_data.push(data[i].pressure);
        humidity_data.push(data[i].humidity);
      }

      var chartdata = {
        labels: time,
        datasets: [
          {
            label: "humidity",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(211, 72, 54, 0.75)",
            borderColor: "rgba(211, 72, 54, 1)",
            pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
            pointHoverBorderColor: "rgba(211, 72, 54, 1)",
            data: humidity_data
          }
        ]
      };

      var ctx = $("#mycanvas2");

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