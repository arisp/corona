import moment from 'moment/src/moment';

function coronaRecoveredData(data) { return {
    type: 'line',
    data: {
      labels: Object.keys(data.ukRecovered),
      datasets: [
        { // one line graph
          label: 'UK',
          fill: false,
          data: Object.values(data.ukRecovered),
          borderColor: "purple",
          backgroundColor: "purple"
        },
        { // one line graph
          label: 'Italy',
          fill: false,
          data: Object.values(data.italyRecovered),
          borderColor: "blue",
          backgroundColor: "blue"
        },
        { // one line graph
          label: 'Spain',
          fill: false,
          data: Object.values(data.spainRecovered),
          borderColor: "red",
          backgroundColor: "red"
        },
        { // one line graph
          label: 'Germany',
          fill: false,
          data: Object.values(data.germanyRecovered),
          borderColor: "yellow",
          backgroundColor: "yellow"
        },
        { // one line graph
          label: 'Greece',
          fill: false,
          data: Object.values(data.greeceRecovered),
          borderColor: "pink",
          backgroundColor: "pink"
        },
        { // one line graph
          label: 'France',
          fill: false,
          data: Object.values(data.franceRecovered),
          borderColor: "black",
          backgroundColor: "black"
        },
        { // one line graph
          label: 'Sweden',
          fill: false,
          data: Object.values(data.swedenRecovered),
          borderColor: "green",
          backgroundColor: "green"
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'CoViD-19 Cases Recovered (data source temporarily broken)',
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
      }
    }
  }
}

export default coronaRecoveredData;
