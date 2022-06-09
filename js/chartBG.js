newArray = [
    [
        71.8,
        4598.152219232035
    ],
    [
        73,
        4028.4844548885576
    ],
    [
        73.2,
        3933.539827497977
    ],
    [
        73.6,
        3743.6505727168224
    ],
    [
        74.5,
        3316.399749459213
    ],
    [
        74.7,
        3221.4551220686317
    ],
    [
        74.8,
        3173.9828083733455
    ],
    [
        75.6,
        2794.2042988110297
    ],
    [
        75.7,
        2746.7319851157354
    ],
    [
        76.5,
        2366.9534755534196
    ]
]

const entries = new Map(newArray);
const obj = Object.fromEntries(entries);
const ctxs = document.getElementById('bgChart').getContext('2d');


let vert = "rgba(45, 149, 90,1)";


var gradient = ctxs.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(10,10,10,0.5)');
gradient.addColorStop(0.5, 'rgba(255,255,255,0.05)');
gradient.addColorStop(0.8, 'rgba(255,255,255,0.05)');
gradient.addColorStop(0.9, 'rgba(255,255,255,0.05)');
gradient.addColorStop(1, 'rgba(255,255,255,0.15)');

var datas = {
    datasets: [{
        label: 'All Currencies',
        fillColor: gradient,
        data: obj,
        pointRadius: 0,
        hoverPointRadius: 0,
        fill: {
            target: 'origin',
            above: gradient,   // Area will be red above the origin
            below: gradient,    // And blue below the origin
            fillOpacity: 0,

        },
        borderColor: 'rgba(10,10,10,0.15)',
        tension: 0.5,

    }]
};

const configs = {
    type: 'line',
    data: datas,
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
                enabled: false
            }
        },
        animation: {
            duration: 0
        }
    }
};

new Chart(ctxs, configs);


