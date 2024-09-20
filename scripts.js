document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code here for any interactions

    new Chart(document.getElementById('myChart'), {
        type: 'line', // or 'bar', 'pie', etc.
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Data',
                data: [10, 20, 30, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
