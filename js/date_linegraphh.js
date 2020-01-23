$(document).ready(function(){
    setInterval(function(){
    
  $.ajax({
    url : "http://localhost/textwebsite/retrive_dateh.php",
    type : "GET",
    success : function(data){
      console.log(data);

      var date = [];
        var humidity_data= [];
 
      for(var i in data) {
        date.push("date " + data[i].date);
       humidity_data.push(data[i].humidity);
     
      }

      var chartdata = {
        labels: date,
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

      var ctx = $("#mycanvas5");

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