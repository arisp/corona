import moment from 'moment/src/moment';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { ClassicMedium10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';

function coronaCaseData(data) { return {
  type: 'line',

  data: {
    labels: Object.keys(data.ukConfirmed),
    datasets: [
      { // one line graph
        label: 'UK',
        fill: false,
        data: Object.values(data.ukConfirmed),
      },
      { // one line graph
        label: 'Italy',
        fill: false,
        data: Object.values(data.italyConfirmed),
      },
      { // one line graph
        label: 'Spain',
        fill: false,
        data: Object.values(data.spainConfirmed),
      },
      { // one line graph
        label: 'Germany',
        fill: false,
        data: Object.values(data.germanyConfirmed),
      },
      { // one line graph
        label: 'Greece',
        fill: false,
        data: Object.values(data.greeceConfirmed),
      },
      { // one line graph
        label: 'France',
        fill: false,
        data: Object.values(data.franceConfirmed),
      },
      { // one line graph
        label: 'Sweden',
        fill: false,
        data: Object.values(data.swedenConfirmed),
      },
      { // one line graph
        label: 'China',
        fill: false,
        data: Object.values(data.chinaConfirmed),
      },
      { // one line graph
        label: 'United States',
        fill: false,
        data: Object.values(data.unitedStatesConfirmed),
      },
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
    },
    legend: {
      display: true,
      labels: {
          fontColor: 'black',
          usePointStyle: true,
          padding: 30,
          fontSize: 14
      }
    },
    plugins: {
      colorschemes: {
          scheme: ClassicMedium10
      }
    }
  }
}
}
  
export default coronaCaseData;