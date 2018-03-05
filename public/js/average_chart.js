var ctx = document.getElementById("avgChart");

var avgChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Car", "Light-Duty Truck", "Motorcycle", "Transit Rail", "Bus", "Bicycle", "Walking"],
        datasets: [{
            label: 'Kg of Carbon Dioxide per mile traveled',
            data: [0.355, 0.485, 0.191, 0.120, 0.055, 0, 0],
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
