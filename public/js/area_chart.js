console.log("#######", chartData.modes);
var ctx = document.getElementById("area_chart");

var xDate = []
var actual = []
var cycle = []
var transit = []


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
function getDate(){
	chartData.modes.map(function(item){
		if((xDate.indexOf(item.date)) == -1){
			xDate.push(item.date);
		}	
	})
	console.log("xDate array###", xDate);
	getActual(xDate);
}



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
      label: "dates",
      fill: true,
      backgroundColor: colors.purple.fill,
      pointBackgroundColor: colors.purple.stroke,
      borderColor: colors.purple.stroke,
      pointHighlightStroke: colors.purple.stroke,
      borderCapStyle: 'butt',
      data: xDate,

    }, {
      label: "Actual Carbon",
      fill: true,
      backgroundColor: colors.darkBlue.fill,
      pointBackgroundColor: colors.darkBlue.stroke,
      borderColor: colors.darkBlue.stroke,
      pointHighlightStroke: colors.darkBlue.stroke,
      borderCapStyle: 'butt',
      data: actual,
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


getDate();
