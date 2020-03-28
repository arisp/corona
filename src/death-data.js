function parseDeathData(data) { return {
    
    data: {
      labels: Object.keys(data.ukDeaths),
      datasets: [
        { // one line graph
          label: 'UK',
          fill: false,
          data: Object.values(data.ukDeaths),
        },
        { // one line graph
          label: 'Italy',
          fill: false,
          data: Object.values(data.italyDeaths),
        },
        { // one line graph
          label: 'Spain',
          fill: false,
          data: Object.values(data.spainDeaths),
        },
        { // one line graph
          label: 'Germany',
          fill: false,
          data: Object.values(data.germanyDeaths),
        },
        { // one line graph
          label: 'Greece',
          fill: false,
          data: Object.values(data.greeceDeaths),
        },
        { // one line graph
          label: 'France',
          fill: false,
          data: Object.values(data.franceDeaths),
        },
        { // one line graph
          label: 'Sweden',
          fill: false,
          data: Object.values(data.swedenDeaths),
        },
        { // one line graph
          label: 'China',
          fill: false,
          data: Object.values(data.chinaDeaths),
        },
        { // one line graph
          label: 'United States',
          fill: false,
          data: Object.values(data.unitedStatesDeaths),
        },
      ],
    }   
  }
}

export default parseDeathData;
