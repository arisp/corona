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

    result.ukDeaths = sortTimeline(jsonUk.timeline.deaths);
    result.italyDeaths = sortTimeline(jsonItaly.timeline.deaths);
    result.spainDeaths = sortTimeline(jsonSpain.timeline.deaths);
    result.germanyDeaths = sortTimeline(jsonGermany.timeline.deaths);
    result.greeceDeaths = sortTimeline(jsonGreece.timeline.deaths);
    result.franceDeaths = sortTimeline(jsonFrance.timeline.deaths);
    result.swedenDeaths = sortTimeline(jsonSweden.timeline.deaths);

    result.ukConfirmed = sortTimeline(jsonUk.timeline.cases);
    result.italyConfirmed = sortTimeline(jsonItaly.timeline.cases);
    result.spainConfirmed = sortTimeline(jsonSpain.timeline.cases);
    result.germanyConfirmed = sortTimeline(jsonGermany.timeline.cases);
    result.greeceConfirmed = sortTimeline(jsonGreece.timeline.cases);
    result.franceConfirmed = sortTimeline(jsonFrance.timeline.cases);
    result.swedenConfirmed = sortTimeline(jsonSweden.timeline.cases);

    // result.ukRecovered = sortTimeline(jsonUk.location.timelines.recovered.timeline);
    // result.italyRecovered = sortTimeline(jsonItaly.location.timelines.recovered.timeline);
    // result.spainRecovered = sortTimeline(jsonSpain.location.timelines.recovered.timeline);
    // result.germanyRecovered = sortTimeline(jsonGermany.location.timelines.recovered.timeline);
    // result.greeceRecovered = sortTimeline(jsonGreece.location.timelines.recovered.timeline);
    // result.franceRecovered = sortTimeline(jsonFrance.location.timelines.recovered.timeline);
    // result.swedenRecovered = sortTimeline(jsonSweden.location.timelines.recovered.timeline);

    return result;
}