<script>

import { Line } from 'vue-chartjs'

import parseCasesData from "../case-data.js";
import chartOptions from '../chartOptions.js'

import { bus } from '../main.js'

export default {
  extends: Line,
  name: "CaseChart",
  mounted() {
    bus.$on('render', (receivedData) => {
      let casesData = parseCasesData(receivedData);
      chartOptions.title.text = 'CoViD-19 Confirmed Cases';

      this.renderChart(casesData, chartOptions);
    });
  }
}
</script>