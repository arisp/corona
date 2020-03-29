import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { ClassicLight10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';

var latestChartOptions = {
  maintainAspectRatio: false,
  title: {
    display: true,
    fontSize: 14
  },
  responsive: true,
  lineTension: 1,
  scales: {
    yAxes: [{
        stacked: false
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
        scheme: ClassicLight10,
        fillAlpha: 0.4
    }
  }
}
     
export default latestChartOptions;