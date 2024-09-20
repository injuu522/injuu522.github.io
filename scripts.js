document.addEventListener('DOMContentLoaded', function() {
    // Creating the chart with enhanced options and aesthetics
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',  // Change this to 'bar', 'pie', etc., depending on your needs
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [10, 20, 30, 40],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    tension: 0.4,  // Adds a slight curve to the line
                    pointStyle: 'rectRounded'
                },
                {
                    label: 'Dataset 2',
                    data: [40, 30, 20, 10],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    tension: 0.4,  // Consistent styling with Dataset 1
                    pointStyle: 'circle'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'index',
                intersect: false
            },
            legend: {
                display: true
            },
            animation: {
                duration: 1000  // Smooth transitions of 1 second
            }
        }
    });

    // Optional: Function to fetch and update chart data dynamically
    function fetchDataAndUpdateChart() {
        fetch('path_to_your_data_endpoint')
            .then(response => response.json())
            .then(data => {
                myChart.data.datasets.forEach((dataset, index) => {
                    dataset.data = data[index];  // Assuming the data is an array of arrays
                });
                myChart.update();
            })
            .catch(error => console.error('Error loading the data: ', error));
    }

    // Uncomment the following line to enable dynamic data loading
    // setInterval(fetchDataAndUpdateChart, 5000); // Fetch new data every 5 seconds
});
