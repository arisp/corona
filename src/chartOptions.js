import moment from 'moment/src/moment';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { ClassicMedium10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';

var chartOptions = {
  maintainAspectRatio: false,
  title: {
    display: true,
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
        padding: 15,
        fontSize: 12
    }
  },
  plugins: {
    colorschemes: {
        scheme: ClassicMedium10
    }
  }
}

        
export default chartOptions;