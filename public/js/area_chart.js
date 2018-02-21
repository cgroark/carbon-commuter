console.log("#######", chartData.modes);

var xDate = []
var actual = []
var cycle = []
var bus = []
var transit = []
var drive = []


function getActual(xDate){
	for(var i=0; i<xDate.length; i++){
		var total=0;
		chartData.modes.forEach(function(item){
			if(item.date == xDate[i]){
				total = total + Number(item.carbon);
			}
		})
	actual.push(total)
	console.log("##actual###",actual)
	}
	return total
}
function getOther(xDate){
	for(var i=0; i<xDate.length; i++){
		var totalBus = 0;
		var totalTransit = 0;
		var totalCycle = 0;
		var totalDrive = 0;
		chartData.modes.forEach(function(item){
			if(item.date == xDate[i]){
				totalBus = totalBus  + Number((item.distance * 0.055));
				totalTransit = totalTransit + Number((item.distance * 0.120));
				totalCycle = totalCycle + Number((item.distance * 0));
				totalDrive = totalDrive + Number((item.distance * 0.355)) 
			}
		})
		bus.push(totalBus)
		transit.push(totalTransit)
		cycle.push(totalCycle)
		drive.push(totalDrive)
		console.log("####buuuus###", bus)
		console.log("###trannnnist###", transit)
		console.log("###cycelllle###", cycle)
		console.log("###caar###", drive)
		var ctx = document.getElementById("area_chart");



	}
	return totalBus
	return totalTransit
	return totalCycle

}
function getDate(){
	chartData.modes.map(function(item){
		if((xDate.indexOf(item.date)) == -1){
			xDate.push(item.date);
		}	
	})
	console.log("xDate array###", xDate);
	getActual(xDate);
	getOther(xDate);
}
getDate();

function buildChart(qqq, qcwqwc, , q, wc){}
var colors = {
  green: {
    fill: '#e0eadf',
    stroke: '#5eb84d',
  },
  lightBlue: {
    stroke: '#6fccdd',
  },
  darkBlue: {
    fill: '#92bed2',
    stroke: '#3282bf',
  },
  purple: {
    fill: '#8fa8c8',
    stroke: '#75539e',
  },
};

var areaChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xDate,
    datasets: [{
      label: "Actual",
      fill: true,
      backgroundColor: colors.purple.fill,
      pointBackgroundColor: colors.purple.stroke,
      borderColor: colors.purple.stroke,
      pointHighlightStroke: colors.purple.stroke,
      borderCapStyle: 'butt',
      data: actual,

    }, {
      label: "Cycling/Walking",
      fill: true,
      backgroundColor: colors.darkBlue.fill,
      pointBackgroundColor: colors.darkBlue.stroke,
      borderColor: colors.darkBlue.stroke,
      pointHighlightStroke: colors.darkBlue.stroke,
      borderCapStyle: 'butt',
      data: cycle,
    }, {
      label: "Bus",
      fill: true,
      backgroundColor: colors.green.fill,
      pointBackgroundColor: colors.lightBlue.stroke,
      borderColor: colors.lightBlue.stroke,
      pointHighlightStroke: colors.lightBlue.stroke,
      borderCapStyle: 'butt',
      data: bus,
    }, {
      label: "Passenger Car",
      fill: true,
      backgroundColor: colors.green.fill,
      pointBackgroundColor: colors.green.stroke,
      borderColor: colors.green.stroke,
      pointHighlightStroke: colors.green.stroke,
      data: drive,
    }]
  },
  options: {
    responsive: false,
    // Can't just just `stacked: true` like the docs say
    scales: {
      yAxes: [{
        stacked: true,
      }]
    },
    animation: {
      duration: 750,
    },
  }
});


