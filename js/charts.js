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
        color: 'rgb(242, 169, 0)',
        balance: 123.34

    },
    {
        value: 25,
        name: 'ETH',
        color: 'rgb(33, 92, 175)',
        balance: 13.34
    },
    {
        value: 25,
        name: 'VGO',
        color: 'rgb(255, 99, 232)',
        balance: 5469.34
    },
    {
        value: 50,
        name: 'BNB',
        color: 'rgb(123, 23, 0)',
        balance: 123456789.34
    }
];

let dataColor = pieData.map(function (e) {
    return e.color;
});

let percent = pieData.map(e => {
    console.log(e.value)
})


const positiveColor = 'rgb(32,201,125)'
const negativeColor = 'rgb(149,45,45)'
const negativeDoug = 'rgb(255,0,0)'
const negativeRotate = 180
const positiveRotate = 0
const positiveChev = '\uf077'
const negativeChev = '\uf078'
chartDoug = ""
let anime = ""

let ctx = document.getElementById("mainCurrencyChart").getContext("2d");

let walletValue = 34567.34

let walletDif = walletValue.toFixed(4)

const centerText = {
    id: 'centerText',
    afterDatasetsDraw(chart, args, options) {
        const {ctx, chartArea: {left, right, top, bottom, width, height}} = chart;
        ctx.save()
        ctx.beginPath();
        ctx.font = '14px FontAwesome';

        //Background part
        var grd= ctx.createLinearGradient(0,100,125,100);
        grd.addColorStop(1,'rgb(90,0,156)');
        grd.addColorStop(1,'rgb(130,0,226)');
        ctx.arc(125, 125, 105, 0, 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();

        //Font part
        ctx.font = '15px Arial'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText("Estimated Value", width / 2, height / 2.7 + top + 8)

        ctx.font = '25px Arial'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText("$ " + walletValue, width / 2, height / 2 + top + 8)

        //Change
        ctx.font = "15px Arial ,fontawesome"
        ctx.fillStyle = positiveColor
        ctx.textAlign = 'center'
        ctx.fillText(positiveChev + " " + "$" + walletDif, width / 2, height / 2 + top + 35)

        ctx.save();
        ctx.restore()
    }
}

console.log(anime[0],anime)

let data = {
    datasets: [{
        data: pieData,
        backgroundColor: dataColor,
        borderWidth: 0,
        cutout: '92%'
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

        /*        hover: {
                    animationDuration:0
                },*/
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

                callbacks: {
                    label: (context) => {
                        let asset = context.raw.name
                        let value = context.raw.value + " %"
                        let balance = context.raw.balance + " €"
                        return [asset, value, balance]
                    },
                    labelPointStyle: function (context) {
                        return {
                            pointStyle: 'triangle',
                            backgroundColor: negativeColor,
                            labelColors: negativeColor,
                            rotation: positiveRotate,
                            textAlign: 'center'
                        }
                    },
                    labelColor: function (context) {
                        return {
                            backgroundColor: positiveColor,
                        }
                    }
                }
            }
        },
        animation: {
            animateRotate: false,
            duration: 700
        }
    }
};

chartDoug = new Chart(ctx, config);

/*setInterval(() => {
    walletValue = walletValue + Math.round(5000)

    function makeid() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    pieData.push(
        {
            value: Math.round(Math.random() * 500),
            name: makeid(),
            color: 'rgb(155, 99, 132)',
            price: Math.round(Math.random() * 1000)
        }
    )
    chartDoug.destroy()
    chartDoug = new Chart(ctx, config)
    ctx.save();
    console.table(ctx.data.datasets[0].data)
}, 2500)*/


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
