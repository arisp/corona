import { getLabelsFromDateKeys } from './historicalChartUtils.js';
import { getValueDataFromTimeline } from './historicalChartUtils.js'

function parseCasesData(data) {
  return {
      labels: getLabelsFromDateKeys(Object.keys(data.get("uk").data.timeline.cases)),
      datasets: generateDatasets(data)
  }
}
  
function generateDatasets(data) {
  let datasetArray = [];

  for (let country of data.keys()) {
    let casesTimelineData = data.get(country).data.timeline.cases;
    let casesLatestData = data.get(country).latest.cases;

    datasetArray.push({
      label: data.get(country).name,
      fill: false,
      data: getValueDataFromTimeline(casesTimelineData, casesLatestData),
    });
  }

  return datasetArray;
}

export default parseCasesData;