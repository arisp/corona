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
    intersect: true,
    callbacks: {
      title: function(tooltipItem) {
        let title = moment(tooltipItem[0].xLabel).format("MMM Do YYYY");
        return title;
      },
      label: function(tooltipItem, data) {
        let label = " " + data.datasets[tooltipItem.datasetIndex].label;

        let valueDayBefore = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index - 1];
        let valueToday = tooltipItem.yLabel;
        let diff = valueToday - valueDayBefore;
        if (diff > 0) {
          label = label + ": " + valueToday.toLocaleString() + " (+" + diff.toLocaleString() + ")";
        }
        else {
          label = label + ": " + valueToday.toLocaleString() + " (=)";
        }

        return label;
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
        scheme: ClassicMedium10,
        fillAlpha: 0.4
    }
  }
}
     
export default chartOptions;