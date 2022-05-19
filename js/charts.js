let jsonfile = {
    "jsonarray": [{
        "name": "BTC",
        "age": 12,
        "color": 'rgb(255, 99, 132)'
    }, {
        "name": "ETH",
        "age": 14,
        "color": 'rgb(54, 162, 235)',
        "value": 2345.34

    }]
};


let pieData = [
    {
        value: 25,
        name: 'BTC',
        color: 'rgb(255, 99, 132)',
        price: 123.34

    },
    {
        value: 25,
        name: 'ETH',
        color: 'rgb(54, 162, 235)',
        price: 13.34
    },
    {
        value: 25,
        name: 'VGO',
        color: 'rgb(255, 99, 232)',
        price: 5469.34
    },
    {
        value : 25,
        name: 'BNB',
        color: 'rgb(123, 23, 0)',
        price: 123456789.34
    }
];

let dataColor = pieData.map(function(e) {
    return e.color;
});


const positiveColor = 'rgb(32,201,125)'
const negativeColor = 'rgb(149,45,45)'
const negativeRotate = 180
const positiveRotate = 0


let ctx = document.getElementById("mainCurrencyChart").getContext("2d");

let walletValue =34567.34

let walletDif = walletValue.toFixed(4)

const centerText = {
    id: 'centerText',
    afterDatasetsDraw(chart, args, options){
        const {ctx, chartArea: {left,right,top,bottom,width,height}} = chart;
        ctx.save()
        ctx.font = 'bolder 25px Arial'
        ctx.fillStyle = 'rgb(0,0,0)'
        ctx.textAlign = 'center'
        ctx.fillText(walletValue + "$",width / 2,height / 2 + top + 8)
        ctx.restore()

        ctx.font = ' 15px Arial'
        ctx.fillStyle = negativeColor
        ctx.textAlign = 'center'
        ctx.fillText('-' + walletDif  + "$",width / 2,height / 2 + top + 35)
        ctx.restore()
    }
}



let data = {
    datasets: [{
        data: pieData,
        backgroundColor:dataColor,
        borderWidth: 0,
        cutout: '80%'
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    plugins: [centerText],
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
                bodyAlign: 'center',
                usePointStyle: true,
                callbacks:{
                    label: (context) => {
                        let asset = context.raw.name
                        let value = context.raw.value + " %"
                        let price = context.raw.price + " €"
                        let vals = [asset,value,price]
                        return vals
                    },
                    labelPointStyle: function(context) {
                        return {
                            pointStyle: 'triangle',
                            backgroundColor: negativeColor,
                            rotation: 180
                        };
                    }
                }
            }
        },
        animation: {
            duration: 0
        }
    }
};


new Chart(ctx, config);
