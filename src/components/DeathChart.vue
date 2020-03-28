<script>

import { Line } from 'vue-chartjs'

import parseDeathData from "../death-data.js";
import chartOptions from '../chartOptions.js'

import { bus } from '../main.js'

export default {
  extends: Line,
  name: "DeathChart",
  mounted() {
    bus.$on('render', (chartData) => {
      let parsedData = parseDeathData(chartData);
      chartOptions.title.text = 'CoViD-19 Recorded Deaths';

      this.renderChart(parsedData.data, chartOptions);
    });
  },
  data() {
    return {
      parseDeathData: parseDeathData
    };
  }
}
</script>

<style scoped>

</style>