var ctx = document.getElementById('myChart');

function getUpperBounderLine() {
    const dd = myData.graphObj.expected;
    const dd2 = dd.map(row=>row[2]);
    return dd2;
}

function getDownBounderLine() {
    const dd = myData.graphObj.expected;
    const dd2 = dd.map(row=>row[3]);
    return dd2;

}

function getPredictedLine() {
    const dd = myData.graphObj.expected;
    const dd2 = dd.map(row=>row[1]);
    return dd2;
}


function getActual() {
    const dd = myData.graphObj.actual;
    const dd2 = dd.map(row=>row[1]);
    return dd2;
}

function getDatesLabels() {
    const dd = myData.graphObj.expected;
    const dd2 = dd.map(row=> {
        const date = new Date(row[0])
        return `${date.getDate()}/${date.getMonth()+1}`
    });
    return dd2;
}

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: getDatesLabels(),
    datasets: [
        {
        label: 'Upper bound',
        backgroundColor: '#7db9fe30',
        borderColor: '#7db9fe',
        data: getUpperBounderLine(),
        fill: '1',
        tension: 0.2
        },
        {
            label: 'Lower bound',
            backgroundColor: '#7db9fe30',
            borderColor: '#7db9fe',
            data: getDownBounderLine(),
            tension: 0.2
        },
        {
            label: 'Actual',
            backgroundColor: 'rgb(196,243,203)',
            borderColor: 'rgb(252,18,0)',
            data: getActual(),
            tension: 0.2
        }
    ]
};

const config = {
    type: 'line',
    data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
};
Chart.defaults.scale.grid.display = false;
Chart.defaults.scale.ticks.display = false;
Chart.defaults.plugins.legend.display = false;

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);