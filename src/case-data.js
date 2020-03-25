import moment from 'moment/src/moment';

function coronaCaseData(data) { return {
  type: 'line',

  data: {
    labels: Object.keys(data.ukConfirmed),
    datasets: [
      { // one line graph
        label: 'UK',
        fill: false,
        data: Object.values(data.ukConfirmed),
        borderColor: "purple",
        backgroundColor: "purple"
      },
      { // one line graph
        label: 'Italy',
        fill: false,
        data: Object.values(data.italyConfirmed),
        borderColor: "blue",
        backgroundColor: "blue"
      },
      { // one line graph
        label: 'Spain',
        fill: false,
        data: Object.values(data.spainConfirmed),
        borderColor: "red",
        backgroundColor: "red"
      },
      { // one line graph
        label: 'Germany',
        fill: false,
        data: Object.values(data.germanyConfirmed),
        borderColor: "yellow",
        backgroundColor: "yellow"
      },
      { // one line graph
        label: 'Greece',
        fill: false,
        data: Object.values(data.greeceConfirmed),
        borderColor: "pink",
        backgroundColor: "pink"
      },
      { // one line graph
        label: 'France',
        fill: false,
        data: Object.values(data.franceConfirmed),
        borderColor: "black",
        backgroundColor: "black"
      }
    ],
  },
  options: {
    title: {
      display: true,
      text: 'CoViD-19 Confirmed Cases',
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
          padding: 25,
        }
      }],
      xAxes: [{
          type: 'time',
          time: {
              unit: 'day'
          }
      }]
    }
  }
}
}
  
export default coronaCaseData;