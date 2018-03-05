var ctx = document.getElementById("compare_chart");
var distance = Number(compData.rows[0].elements[0].distance.value / 1000 * 0.621371).toFixed(2)
var mode = mode

var options = [{
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'probability'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'hola'
          }
        }],
      }
    }]

var colors = [
                'rgba(154,147,236,.2)',
                'rgba(0,173,206,.2)',
                'rgba(0,82,165,.2)',
                'rgba(65,179,247,.2)',
                'rgba(101,168,196,.2)',
                'rgba(0,197,144,.2)',
                'rgba(115,235,174,.2)'
            ]

var labels = ["Car", "Light-Duty Truck", "Motorcycle", "Transit Rail", "Bus", "Bicycle", "Walking"]

function alterColors(mode,colors,labels){
    for(var i = 0; i < labels.length; i++){
          var str = labels[i]
            if(str == mode){
                colors[i] = colors[i].replace(',.2)', ',8)')
            }
        }
        return colors;
}

var colors2 = alterColors(mode,colors,labels);

var compChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Kg of Carbon Dioxide based on current distance',
            data: [distance * 0.355, distance * 0.485, distance * 0.191, distance * 0.120, distance * 0.055, 0, 0],
            backgroundColor: colors2,
            borderColor: [
                'rgba(154,147,236,1)',
                'rgba(0,173,206,1)',
                'rgba(0,82,165,1)',
                'rgba(65,179,247,1)',
                'rgba(101,168,196,1)',
                'rgba(0,197,144,1)',
                'rgba(115,235,174,1)'
            ],
            borderWidth: 1
        }]
    },
    options: options
});
