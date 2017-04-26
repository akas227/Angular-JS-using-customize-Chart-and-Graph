app.controller("PieCtrl", function ($scope) {

    $scope.pie = "Title 8";
    
    const CHART = document.getElementById('pie');
    //console.log('chart.defaults.scale.ticks');

    let barChart = new Chart(CHART, {
        type: 'pie',
        data: {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            datasets: [
                {
                    label: 'Numbers per month',
                    backgroundColor: ['#924511', '#b75615', '#df6a1a', '#e77d36', '#ec955b', '#f0ac7f', '#f4c4a4'],
                    borderColor: '#8a7468',
                    borderWidth: 1,
                    data: [37, 43, 27, 42, 52, 41, 33]
                }
            ]
        }
    });
});