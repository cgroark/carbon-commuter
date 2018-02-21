console.log(chartData.modes)
var ctx = document.getElementById("myChart");
var label = ["driving", "bus", "bicycling", "walking", "transitrail", "motorcycle", "truck"];
var distance = [];

function getTotal(data, label){
	for(var i=0; i<=label.length; i++){
		var total=0;
		data.forEach(function(item){
			if(item.mode == label[i]){
				total = total + Number(item.distance);
			}
		})
	distance.push(total)
	}
	return distance
}

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: label,
        datasets: [{
            label: 'Carbon Emissions',
            data: distance,
            backgroundColor: [
            	'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(130,130,130,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(130,130,130, 1)'
            ],
        }]
    },
});

getTotal(chartData.modes,label);
