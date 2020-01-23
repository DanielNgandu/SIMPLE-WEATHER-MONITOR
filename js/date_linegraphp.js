$(document).ready(function(){
    setInterval(function(){
    
  $.ajax({
    url : "http://localhost/textwebsite/retrive_datep.php",
    type : "GET",
    success : function(data){
      console.log(data);

      var date = [];
        var pressure_data= [];
 
      for(var i in data) {
        date.push("date " + data[i].date);
        pressure_data.push(data[i].pressure);
     
      }

      var chartdata = {
        labels: date,
        datasets: [
          {
        label: "pressure",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(29, 202, 255, 0.75)",
            borderColor: "rgba(29, 202, 255, 1)",
            pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
            pointHoverBorderColor: "rgba(29, 202, 255, 1)",
            data: pressure_data
          }
        ]
      };

      var ctx = $("#mycanvas4");

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