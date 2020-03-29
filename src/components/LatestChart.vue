<script>

import { Bar } from 'vue-chartjs'

import parseLatestData from "../latest-data.js";
import latestChartOptions from '../latestChartOptions.js'

import { bus } from '../main.js'

export default {
  extends: Bar,
  name: "LatestChart",
  mounted() {
    bus.$on('render', (receivedData) => {
      let latestData = parseLatestData(receivedData);
      latestChartOptions.title.text = 'CoViD-19 Latest Stats';

      this.renderChart(latestData, latestChartOptions);
    });
  }
}
</script>