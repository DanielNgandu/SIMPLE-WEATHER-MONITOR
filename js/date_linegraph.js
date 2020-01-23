$(document).ready(function(){
    setInterval(function(){
    
  $.ajax({
    url : "http://localhost/textwebsite/retrive_date.php",
    type : "GET",
    success : function(data){
      console.log(data);

      var date = [];
        var temperature_data= [];
 
      for(var i in data) {
        date.push("date " + data[i].date);
        temperature_data.push(data[i].temperature);
     
      }

      var chartdata = {
        labels: date,
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

      var ctx = $("#mycanvas3");

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