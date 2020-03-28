<script>

import { Line } from 'vue-chartjs'

import parseCaseData from "../case-data.js";
import chartOptions from '../chartOptions.js'

import { bus } from '../main.js'

export default {
  extends: Line,
  name: "CaseChart",
  mounted() {
    bus.$on('render', (chartData) => {
      let parsedData = parseCaseData(chartData);
      chartOptions.title.text = 'CoViD-19 Confirmed Cases';

      this.renderChart(parsedData.data, chartOptions);
    });
  },
  data() {
    return {
      parseCaseData: parseCaseData
    };
  }
}
</script>

<style scoped>

</style>