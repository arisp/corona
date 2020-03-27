import moment from 'moment/src/moment';

function coronaDeathData(data) { return {
    type: 'line',
    data: {
      labels: Object.keys(data.ukDeaths),
      datasets: [
        { // one line graph
          label: 'UK',
          fill: false,
          data: Object.values(data.ukDeaths),
          borderColor: "purple",
          backgroundColor: "purple"
        },
        { // one line graph
          label: 'Italy',
          fill: false,
          data: Object.values(data.italyDeaths),
          borderColor: "blue",
          backgroundColor: "blue"
        },
        { // one line graph
          label: 'Spain',
          fill: false,
          data: Object.values(data.spainDeaths),
          borderColor: "red",
          backgroundColor: "red"
        },
        { // one line graph
          label: 'Germany',
          fill: false,
          data: Object.values(data.germanyDeaths),
          borderColor: "yellow",
          backgroundColor: "yellow"
        },
        { // one line graph
          label: 'Greece',
          fill: false,
          data: Object.values(data.greeceDeaths),
          borderColor: "pink",
          backgroundColor: "pink"
        },
        { // one line graph
          label: 'France',
          fill: false,
          data: Object.values(data.franceDeaths),
          borderColor: "black",
          backgroundColor: "black"
        },
        { // one line graph
          label: 'Sweden',
          fill: false,
          data: Object.values(data.swedenDeaths),
          borderColor: "green",
          backgroundColor: "green"
        },
        { // one line graph
          label: 'China',
          fill: false,
          data: Object.values(data.chinaDeaths),
          borderColor: "orange",
          backgroundColor: "orange"
        },
        { // one line graph
          label: 'United States',
          fill: false,
          data: Object.values(data.unitedStatesDeaths),
          borderColor: "grey",
          backgroundColor: "grey"
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'CoViD-19 Recorded Deaths',
        fontSize: 14
      },
      tooltips: {
        position: 'nearest',
        mode: 'index',
        intersect: false,
        callbacks: {
          title: function(tooltipItem) {
            let title = moment(tooltipItem[0].xLabel).format("MMM Do YYYY");
              return title;
          }
        },
        itemSort: function (a, b) {
          return b.value - a.value;
        } 
      },
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 10,
          }
        }],
        xAxes: [{
            type: 'time',
            time: {
                unit: 'day'
            },
        }]
      },
      legend: {
        display: true,
        labels: {
            fontColor: 'black',
            usePointStyle: true,
            padding: 30,
            fontSize: 14
        }
    }
    }
  }
}

export default coronaDeathData;
