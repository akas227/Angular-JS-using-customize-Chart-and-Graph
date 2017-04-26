app.controller("PolarAreaCtrl", function ($scope) {

    $scope.polarArea = "Title 9";
    
    const CHART = document.getElementById('polar-area');

    let barChart = new Chart(CHART, {
        type: 'polarArea',
        data: {
            datasets: [
                {
                    backgroundColor: ['#924511', '#b75615', '#df6a1a', '#e77d36', '#ec955b','#f0ac7f', '#f4c4a4'],
                    borderColor: '#828a92',
                    borderWidth: 1,
                    data: [25, 30, 5, 25, 55, 48, 10]
                }
            ],
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
        }
    });
});