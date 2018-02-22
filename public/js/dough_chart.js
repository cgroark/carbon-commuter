var ctx = document.getElementById("dough_chart");
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
	createDough();
}

function createDough(){
	var myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	        labels: label,
	        datasets: [{
	            label: 'Carbon Emissions',
	            data: distance,
	            backgroundColor: [
	            	'rgba(154,147,236,.2)', 
	                'rgba(101,168,196,.2)',
	                'rgba(0,197,144,.2)',
	                'rgba(115,235,174,.2)',
	                'rgba(65,179,247,.2)',
	                'rgba(0,82,165,.2)',
	                'rgba(0,173,206,.2)'
	            ],
	            borderColor: [
	                'rgba(154,147,236,1)',
	                'rgba(101,168,196,1)',
	                'rgba(0,197,144,1)',
	                'rgba(115,235,174,1)',
	                'rgba(65,179,247,1)',
	                'rgba(0,82,165,1)',
	                'rgba(0,173,206,1)'
	            ],
	        }]
	    },
	});
}

getTotal(chartData.modes,label);
