import moment from 'moment/src/moment';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { ClassicMedium10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';

function coronaDeathData(data) { return {
    type: 'line',
    data: {
      labels: Object.keys(data.ukDeaths),
      datasets: [
        { // one line graph
          label: 'UK',
          fill: false,
          data: Object.values(data.ukDeaths),
        },
        { // one line graph
          label: 'Italy',
          fill: false,
          data: Object.values(data.italyDeaths),
        },
        { // one line graph
          label: 'Spain',
          fill: false,
          data: Object.values(data.spainDeaths),
        },
        { // one line graph
          label: 'Germany',
          fill: false,
          data: Object.values(data.germanyDeaths),
        },
        { // one line graph
          label: 'Greece',
          fill: false,
          data: Object.values(data.greeceDeaths),
        },
        { // one line graph
          label: 'France',
          fill: false,
          data: Object.values(data.franceDeaths),
        },
        { // one line graph
          label: 'Sweden',
          fill: false,
          data: Object.values(data.swedenDeaths),
        },
        { // one line graph
          label: 'China',
          fill: false,
          data: Object.values(data.chinaDeaths),
        },
        { // one line graph
          label: 'United States',
          fill: false,
          data: Object.values(data.unitedStatesDeaths),
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
      },
      plugins: {
        colorschemes: {
            scheme: ClassicMedium10
        }
      }
    }
  }
}

export default coronaDeathData;
