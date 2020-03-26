import moment from 'moment/src/moment';

function sortTimeline(timeline) {
    let result = {};
    Object.keys(timeline).sort(function(a, b) {
        return moment(a).toDate() - moment(b).toDate();
    }).forEach(function(key) {
        result[key] = timeline[key];
    })
    return result;
}

export async function getTimelineData() {
    let jsonUk;
    let responseUk = fetch('https://coronapi.azurewebsites.net/timeline/GB').then(async (response) => jsonUk = await response.json());

    let jsonItaly;
    let responseItaly = fetch('https://coronapi.azurewebsites.net/timeline/IT').then(async (response) => jsonItaly = await response.json());

    let jsonSpain;
    let responseSpain = fetch('https://coronapi.azurewebsites.net/timeline/ES').then(async (response) => jsonSpain = await response.json());

    let jsonGermany;
    let responseGermany = fetch('https://coronapi.azurewebsites.net/timeline/DE').then(async (response) => jsonGermany = await response.json());

    let jsonGreece;
    let responseGreece = fetch('https://coronapi.azurewebsites.net/timeline/GR').then(async (response) => jsonGreece = await response.json());

    let jsonFrance;
    let responseFrance = fetch('https://coronapi.azurewebsites.net/timeline/FR').then(async (response) => jsonFrance = await response.json());

    let jsonSweden;
    let responseSweden = fetch('https://coronapi.azurewebsites.net/timeline/SE').then(async (response) => jsonSweden = await response.json());

    await Promise.all([responseUk, responseItaly, responseSpain, responseGermany, responseGreece, responseFrance, responseSweden]);
    var result = {};

    result.ukDeaths = sortTimeline(jsonUk.location.timelines.deaths.timeline);
    result.italyDeaths = sortTimeline(jsonItaly.location.timelines.deaths.timeline);
    result.spainDeaths = sortTimeline(jsonSpain.location.timelines.deaths.timeline);
    result.germanyDeaths = sortTimeline(jsonGermany.location.timelines.deaths.timeline);
    result.greeceDeaths = sortTimeline(jsonGreece.location.timelines.deaths.timeline);
    result.franceDeaths = sortTimeline(jsonFrance.location.timelines.deaths.timeline);
    result.swedenDeaths = sortTimeline(jsonSweden.location.timelines.deaths.timeline);

    result.ukConfirmed = sortTimeline(jsonUk.location.timelines.confirmed.timeline);
    result.italyConfirmed = sortTimeline(jsonItaly.location.timelines.confirmed.timeline);
    result.spainConfirmed = sortTimeline(jsonSpain.location.timelines.confirmed.timeline);
    result.germanyConfirmed = sortTimeline(jsonGermany.location.timelines.confirmed.timeline);
    result.greeceConfirmed = sortTimeline(jsonGreece.location.timelines.confirmed.timeline);
    result.franceConfirmed = sortTimeline(jsonFrance.location.timelines.confirmed.timeline);
    result.swedenConfirmed = sortTimeline(jsonSweden.location.timelines.confirmed.timeline);

    result.ukRecovered = sortTimeline(jsonUk.location.timelines.recovered.timeline);
    result.italyRecovered = sortTimeline(jsonItaly.location.timelines.recovered.timeline);
    result.spainRecovered = sortTimeline(jsonSpain.location.timelines.recovered.timeline);
    result.germanyRecovered = sortTimeline(jsonGermany.location.timelines.recovered.timeline);
    result.greeceRecovered = sortTimeline(jsonGreece.location.timelines.recovered.timeline);
    result.franceRecovered = sortTimeline(jsonFrance.location.timelines.recovered.timeline);
    result.swedenRecovered = sortTimeline(jsonSweden.location.timelines.recovered.timeline);

    return result;
}