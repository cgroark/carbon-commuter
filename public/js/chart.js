
console.log("chaaartdata#####",chartData.modes)
var ctx = document.getElementById("myChart");
var label = ["Driving", "Bus", "Cycling", "Walking", "Transit Rail", "Motorcycle"];
var distance = [];

function labelData(){
	chartData.modes.map(function(item){
		label.push(item.mode)
		console.log("labbbbbbbbbel array", label)
	})
	
}
function distanceData(){
	var totalDistance = chartData.modes.reduce(function(total, item){
		if(item.mode === "driving"){
			return total + item.distance
		}else{
			return total;
		}

	},0);
	distance[0] = parseFloat(totalDistance).toFixed(3)
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
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        }]
    },
});

labelData();
distanceData();