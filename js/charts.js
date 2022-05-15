var jsonfile = {
    "jsonarray": [{
        "name": "BTC",
        "age": 12,
        "color": 'rgb(255, 99, 132)'
    }, {
        "name": "ETH",
        "age": 14,
        "color": 'rgb(54, 162, 235)'

    }]
};

let dataage = jsonfile.jsonarray.map(function(e) {
    return e.age;
});

let datacolor = jsonfile.jsonarray.map(function(e) {
    return e.color;
});


var ctx = document.getElementById("mainCurrencyChart").getContext("2d");



var data = {
    datasets: [{
        data: dataage,
        hoverBorderWidth: 1,
        hoverBorderColor: 'rgb(80,0,140)',
        backgroundColor:datacolor,
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        scales: {

            x: {
                display: false,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                }
            },
            y: {
                display: false,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            }
        },
        animation: {
            duration: 0
        }
    }
};


new Chart(ctx, config);


