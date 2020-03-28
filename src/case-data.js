function parseCaseData(data) { return {
  data: {
    labels: Object.keys(data.ukConfirmed),
    datasets: [
      { // one line graph
        label: 'UK',
        fill: false,
        data: Object.values(data.ukConfirmed),
      },
      { // one line graph
        label: 'Italy',
        fill: false,
        data: Object.values(data.italyConfirmed),
      },
      { // one line graph
        label: 'Spain',
        fill: false,
        data: Object.values(data.spainConfirmed),
      },
      { // one line graph
        label: 'Germany',
        fill: false,
        data: Object.values(data.germanyConfirmed),
      },
      { // one line graph
        label: 'Greece',
        fill: false,
        data: Object.values(data.greeceConfirmed),
      },
      { // one line graph
        label: 'France',
        fill: false,
        data: Object.values(data.franceConfirmed),
      },
      { // one line graph
        label: 'Sweden',
        fill: false,
        data: Object.values(data.swedenConfirmed),
      },
      { // one line graph
        label: 'China',
        fill: false,
        data: Object.values(data.chinaConfirmed),
      },
      { // one line graph
        label: 'United States',
        fill: false,
        data: Object.values(data.unitedStatesConfirmed),
      },
    ],
  },
}
}
  
export default parseCaseData;