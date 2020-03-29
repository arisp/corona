function parseLatestData(data) {
    return {  
        labels: Array.from(data.values()).map(value => {
            return value.name;
        }),
        datasets: generateDatasets(data),
    }
  }
  
  function generateDatasets(data) {
    let datasetArray = [];
  
    let deathsPerMillion = [];

    for (let country of data.keys()) {
        deathsPerMillion.push(data.get(country).latest.deathsPerOneMillion);
    }

    let casesPerMillion = [];

    for (let country of data.keys()) {
        casesPerMillion.push(data.get(country).latest.casesPerOneMillion);
    }

    let active = [];

    for (let country of data.keys()) {
        active.push(data.get(country).latest.active);
    }

    let critical = [];

    for (let country of data.keys()) {
        critical.push(data.get(country).latest.critical);
    }

    let recovered = [];

    for (let country of data.keys()) {
        recovered.push(data.get(country).latest.recovered);
    }

    datasetArray.push({
        label: "Deaths per million",
        data: deathsPerMillion
    });

    datasetArray.push({
        label: "Cases per million",
        data: casesPerMillion
    });

    datasetArray.push({
        label: "Active",
        data: active
    });

    datasetArray.push({
        label: "Critical",
        data: critical
    });

    datasetArray.push({
        label: "Recovered",
        data: recovered
    });
  
    return datasetArray;
  }
  
  export default parseLatestData;