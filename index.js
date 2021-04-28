function getUpperBounderLine(data) {
    const dd = data.graphObj.expected;
    const dd2 = dd.map(row=>row[2]);
    return dd2;
}

function getDownBounderLine(data) {
    const dd = data.graphObj.expected;
    const dd2 = dd.map(row=>row[3]);
    return dd2;

}

function getPredictedLine(data) {
    const dd = data.graphObj.expected;
    const dd2 = dd.map(row=>row[1]);
    return dd2;
}


function getActual(data) {
    const dd = data.graphObj.actual;
    const dd2 = dd.map(row=>row[1]);
    return dd2;
}

function getDatesLabels(data) {
    const dd = data.graphObj.expected;
    const dd2 = dd.map(row=> {
        const date = new Date(row[0])
        return `${date.getDate()}/${date.getMonth()+1}`
    });
    return dd2;
}

function getChartData(data) {
    return {
        labels: getDatesLabels(data),
        datasets: [
            {
                label: 'Upper bound',
                backgroundColor: '#7db9fe30',
                borderColor: '#7db9fe',
                data: getUpperBounderLine(data),
                fill: '1',
                tension: 0.2
            },
            {
                label: 'Lower bound',
                backgroundColor: '#7db9fe30',
                borderColor: '#7db9fe',
                data: getDownBounderLine(data),
                tension: 0.2
            },
            {
                label: 'Actual',
                backgroundColor: 'rgb(196,243,203)',
                borderColor: 'rgb(252,18,0)',
                data: getActual(data),
                tension: 0.2
            }
        ]
    };
}


Chart.defaults.scale.grid.display = false;
Chart.defaults.scale.ticks.display = false;
Chart.defaults.plugins.legend.display = false;


function getConfig(data) {
    const chartData = getChartData(data)

    const config = {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    return config;
}


function drawChart(elementId, data) {
    var myChart = new Chart(
        document.getElementById(elementId),
        getConfig(data)
    );
}



window.drawChart = drawChart;