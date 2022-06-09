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
        ctx.beginPath();
        ctx.arc(125,125,110,0,2*Math.PI);
        ctx.fillStyle = 'rgba(0,0,0,0.10)';
        ctx.fill();
        ctx.font = 'bolder 25px Arial'
        ctx.fillStyle = 'rgb(0,0,0)'
        ctx.textAlign = 'center'
        ctx.fillText(walletValue + "$",width / 2,height / 2 + top + 8)
        ctx.restore()
        ctx.font = ' 15px Arial'
        ctx.fillStyle = negativeColor
        ctx.textAlign = 'center'
        ctx.fillText('-' + walletDif  + "$",width / 2,height / 2 + top + 35)
        ctx.save();
        ctx.restore()
    }
}



let data = {
    datasets: [{
        data: pieData,
        backgroundColor:dataColor,
        borderWidth: 0,
        cutout: '88%'
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
            },

        },

        hover: {
            animationDuration:0
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                bodyAlign: 'center',
                usePointStyle: true,
                animation: {
                  duration: 0
                },
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
                            labelColors : negativeColor,
                            rotation: positiveRotate,
                            textAlign: 'center'
                        }
                    },
                    labelColor: function(context) {
                        return {
                            backgroundColor: positiveColor,
                        }
                    }
                }
            }
        },
        animation: {
            duration: 1500
        }
    }
};


new Chart(ctx, config);





/*tooltip: {
    // Disable the on-canvas tooltip
    enabled: false,

        external: (context) => {
        // Tooltip Element
        let tooltipEl = document.getElementById('chartjs-tooltip');

        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = '<table></table>';
            document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        const tooltipModel = context.tooltip;
        if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = '0';
            return;
        }

        // Set caret Position (above, below,no-transform ).As I need above I don't delete that class
        tooltipEl.classList.remove('below', 'no-transform');


        // Set HTML & Data
        if (tooltipModel.body) {
            const dataFromCurrentElement = tooltipModel.dataPoints[0];
            const currentElement = dataFromCurrentElement.dataIndex;
            const formattedValue = dataFromCurrentElement.formattedValue.trim();
            const currentDataToShow = formattedValue.substr(1, formattedValue.length - 2).split(' ');
            const innerHtml = `
                        <div style="border-collapse: separate; overflow: hidden; border-radius: 10px; box-shadow: 0 6px 12px rgba(0,0,0,.175);">

                            <div style="background-color: #ECEFF1; padding-top: 5px; padding-bottom: 6px; padding-left: 7px; color: #000; font-family: 'Poppins'; font-size: 14px; border-bottom: solid 1px #DDD">
                               Name
                            </div>
                            <div style="display: flex; padding: 1.2rem; background-color: white">
                                <div style="display: flex; margin-right: 1.2rem;align-items: center;  ">
                                    <div style="border-radius: 100%; background-color: #6785C1; height: 13px; width: 13px;"></div>
                                </div>
                                <div style="display: flex;  flex-direction: column;  font-family: 'Poppins'; font-size: 14px">
                                    <div>Revenue: <span style="font-weight: 600">5224</span></div>
                                    <div>Revenue per employee: <span style="font-weight: 600">5555}</span></div>
                                    <div>Net income per employee: <span style="font-weight: 600">424224</span></div>
                                </div>
                            </div>
                         </div>
                    `;

            tooltipEl.querySelector('table').innerHTML = innerHtml;
        }

        const position = context.chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = '1';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
        tooltipEl.style.pointerEvents = 'none';
    }
}
},*/
