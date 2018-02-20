
console.log("chaaartdata#####",chartData.modes)
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [chartData.modes[0].mode, chartData.modes[1].mode, chartData.modes[2].mode],
        datasets: [{
            label: 'Carbon Emissions',
            data: [chartData.modes[0].carbon, chartData.modes[1].carbon, chartData.modes[2].carbon],
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
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
