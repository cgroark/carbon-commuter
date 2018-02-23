var ctx = document.getElementById("compare_chart");
var distance = Number(compData.rows[0].elements[0].distance.value / 1000 * 0.621371).toFixed(2)

var compChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Car", "Light-Duty Truck", "Motorcycle", "Transit Rail", "Bus", "Cycling", "Walking"],
        datasets: [{
            label: 'Kg of Carbon Dioxide based on current distance',
            data: [distance * 0.355, distance * 0.485, distance * 0.191, distance * 0.120, distance * 0.055, 0, 0],
            backgroundColor: [
                'rgba(154,147,236,.2)',
                'rgba(0,173,206,.2)',
                'rgba(0,82,165,.2)',
                'rgba(65,179,247,.2)',
                'rgba(101,168,196,.2',
                'rgba(0,197,144,.2)',
                'rgba(115,235,174,.2)'
            ],
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
