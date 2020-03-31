<script>

import { Line } from 'vue-chartjs'

import parseDeathsData from "../death-data.js";
import chartOptions from '../historicalChartUtils.js'

import { bus } from '../main.js'

export default {
  extends: Line,
  name: "DeathChart",
  mounted() {
    bus.$on('render', (receivedData) => {
      let deathsData = parseDeathsData(receivedData);
      chartOptions.title.text = 'CoViD-19 Recorded Deaths';

      this.renderChart(deathsData, chartOptions);
    });
  }
}
</script>