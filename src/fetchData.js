import countryDataMap from './countryDataMap.js'

export async function getTimelineData() {

    let requestPromises = [];

    for (let country of countryDataMap.keys()) {
        let requestPromise = fetch('https://api.covid-stats.io/v2/historical/' + country + '?lastdays=60').then(async (response) => countryDataMap.get(country).data = await response.json());
        requestPromises.push(requestPromise);
    }

    for (let country of countryDataMap.keys()) {
        let requestPromise = fetch('https://api.covid-stats.io/v2/countries/' + country).then(async (response) => countryDataMap.get(country).latest = await response.json());
        requestPromises.push(requestPromise);
    }

    await Promise.all(requestPromises);

    for (let country of countryDataMap.keys()) {
        console.log(country + ": ");
        console.log(countryDataMap.get(country).latest);
    }

    return countryDataMap;
}