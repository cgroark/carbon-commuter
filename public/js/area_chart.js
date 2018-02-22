console.log("#######", chartData.modes);
var ctx = document.getElementById("area_chart");

var xDate = []
var actual = []
var cycle = []
var bus = []
var transit = []
var drive = []
var motorcycle = []


function getActual(xDate){
	for(var i=0; i<xDate.length; i++){
		var total=0;
		chartData.modes.forEach(function(item){
			if(item.date == xDate[i]){
				total = total + Number(item.carbon);
			}
		})
	actual.push(total)
	}
	return total
}
function getOther(xDate){
	for(var i=0; i<xDate.length; i++){
		var totalBus = 0;
		var totalTransit = 0;
		var totalCycle = 0;
		var totalDrive = 0;
		var totalMoto = 0;
		chartData.modes.forEach(function(item){
			if(item.date == xDate[i]){
				totalBus = totalBus  + Number((item.distance * 0.055));
				totalTransit = totalTransit + Number((item.distance * 0.120));
				totalCycle = totalCycle + Number((item.distance * 0));
				totalDrive = totalDrive + Number((item.distance * 0.355)) 
				totalMoto = totalMoto + Number((item.distance * 0.191))
			}
		})
		bus.push(totalBus)
		transit.push(totalTransit)
		cycle.push(totalCycle)
		drive.push(totalDrive)
		motorcycle.push(totalMoto)
	}
	console.log("function fiiiiire");
	createChart();
}

function getDate(){
	chartData.modes.map(function(item){
		if((xDate.indexOf(item.date)) == -1){
			xDate.push(item.date);
		}	
	})
	getActual(xDate);
	getOther(xDate);
}
getDate();

function createChart(){
	var areaChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: xDate,
	    datasets: [{
	      label: "Actual",
	      fill: true,
	      backgroundColor: 'rgba(0,65,89,.2)',
	      pointBackgroundColor: 'rgba(0,65,89,1)',
	      borderColor: 'rgba(0,65,89,1)',
	      pointHighlightStroke: 'rgba(0,65,89,1)',
	      borderCapStyle: 'butt',
	      data: actual,

	    }, {
	      label: "Cycling/Walking",
	      fill: true,
	      backgroundColor: 'rgba(0,197,144,.2)',
	      pointBackgroundColor: 'rgba(0,197,144,1)',
	      borderColor: 'rgba(0,197,144,1)',
	      pointHighlightStroke: 'rgba(0,197,144,1)',
	      borderCapStyle: 'butt',
	      data: cycle,
	    }, {
	      label: "Bus",
	      fill: true,
	      backgroundColor: 'rgba(101,168,196,.2)',
	      pointBackgroundColor: 'rgba(101,168,196,1)',
	      borderColor: 'rgba(101,168,196,1)',
	      pointHighlightStroke: 'rgba(101,168,196,1)',
	      borderCapStyle: 'butt',
	      data: bus,
	    }, {
	      label: "Passenger Car",
	      fill: true,
	      backgroundColor: 'rgba(154,147,236,.2)',
	      pointBackgroundColor: 'rgba(154,147,236,1)',
	      borderColor: 'rgba(154,147,236,1)',
	      pointHighlightStroke: 'rgba(154,147,236,1)',
	      data: drive,
	    }, {
	      label: "Motorcycle",
	      fill: true,
	      backgroundColor: 'rgba(0,82,165,.2)',
	      pointBackgroundColor: 'rgba(0,82,165,1)',
	      borderColor: 'rgba(0,82,165,1)',
	      pointHighlightStroke: 'rgba(0,82,165,1)',
	      data: motorcycle,
	    }, ]
	  },
	  options: {
	    responsive: true,
	    // Can't just just `stacked: true` like the docs say
	    scales: {
	      yAxes: [{
	        stacked: false,
	      }]
	    },
	    animation: {
	      duration: 750,
	    },
	  }
	});
}

