import { getLabelsFromDateKeys } from './historicalChartUtils.js';
import { getValueDataFromTimeline } from './historicalChartUtils.js'

function parseDeathsData(data) {
  return {
      labels: getLabelsFromDateKeys(Object.keys(data.get("uk").data.timeline.deaths)),
      datasets: generateDatasets(data),
  }
}

function generateDatasets(data) {
  let datasetArray = [];

  for (let country of data.keys()) {
    let deathsTimelineData = data.get(country).data.timeline.deaths;
    let deathsLatestData = data.get(country).latest.deaths;

    datasetArray.push({
      label: data.get(country).name,
      fill: false,
      data: getValueDataFromTimeline(deathsTimelineData, deathsLatestData),
    });
  }

  return datasetArray;
}

export default parseDeathsData;