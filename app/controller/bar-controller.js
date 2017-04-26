app.controller("BarCtrl", function ($scope) {
    
    $scope.bar = "Title 7"

    const CHART = document.getElementById('bar');
    //console.log('chart.defaults.scale.ticks');

    let barChart = new Chart(CHART, {
        type: 'bar',
        data: {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            datasets: [
                {
                    label: 'Numbers per month',
                    backgroundColor: '#b75615',
                    borderColor: '#b76126',
                    borderWidth: 2,
                    data: [37, 43, 27, 42, 52, 41, 33]
                }
            ]
        }
    });
});
