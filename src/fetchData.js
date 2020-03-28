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
    let responseUk = fetch('https://corona.lmao.ninja/v2/historical/uk').then(async (response) => jsonUk = await response.json());

    let jsonItaly;
    let responseItaly = fetch('https://corona.lmao.ninja/v2/historical/italy').then(async (response) => jsonItaly = await response.json());

    let jsonSpain;
    let responseSpain = fetch('https://corona.lmao.ninja/v2/historical/spain').then(async (response) => jsonSpain = await response.json());

    let jsonGermany;
    let responseGermany = fetch('https://corona.lmao.ninja/v2/historical/germany').then(async (response) => jsonGermany = await response.json());

    let jsonGreece;
    let responseGreece = fetch('https://corona.lmao.ninja/v2/historical/greece').then(async (response) => jsonGreece = await response.json());

    let jsonFrance;
    let responseFrance = fetch('https://corona.lmao.ninja/v2/historical/france').then(async (response) => jsonFrance = await response.json());

    let jsonSweden;
    let responseSweden = fetch('https://corona.lmao.ninja/v2/historical/sweden').then(async (response) => jsonSweden = await response.json());

    let jsonChina;
    let responseChina = fetch('https://corona.lmao.ninja/v2/historical/china').then(async (response) => jsonChina = await response.json());

    let jsonUnitedStates;
    let responseUnitedStates = fetch('https://corona.lmao.ninja/v2/historical/usa').then(async (response) => jsonUnitedStates = await response.json());

    await Promise.all([responseUk, responseItaly, responseSpain, responseGermany, responseGreece, responseFrance, responseSweden, responseChina, responseUnitedStates]);
    var result = {};

    result.ukDeaths = sortTimeline(jsonUk.timeline.deaths);
    result.italyDeaths = sortTimeline(jsonItaly.timeline.deaths);
    result.spainDeaths = sortTimeline(jsonSpain.timeline.deaths);
    result.germanyDeaths = sortTimeline(jsonGermany.timeline.deaths);
    result.greeceDeaths = sortTimeline(jsonGreece.timeline.deaths);
    result.franceDeaths = sortTimeline(jsonFrance.timeline.deaths);
    result.swedenDeaths = sortTimeline(jsonSweden.timeline.deaths);
    result.swedenDeaths = sortTimeline(jsonSweden.timeline.deaths);
    result.chinaDeaths = sortTimeline(jsonChina.timeline.deaths);
    result.unitedStatesDeaths = sortTimeline(jsonUnitedStates.timeline.deaths);

    result.ukConfirmed = sortTimeline(jsonUk.timeline.cases);
    result.italyConfirmed = sortTimeline(jsonItaly.timeline.cases);
    result.spainConfirmed = sortTimeline(jsonSpain.timeline.cases);
    result.germanyConfirmed = sortTimeline(jsonGermany.timeline.cases);
    result.greeceConfirmed = sortTimeline(jsonGreece.timeline.cases);
    result.franceConfirmed = sortTimeline(jsonFrance.timeline.cases);
    result.swedenConfirmed = sortTimeline(jsonSweden.timeline.cases);
    result.chinaConfirmed = sortTimeline(jsonChina.timeline.cases);
    result.unitedStatesConfirmed = sortTimeline(jsonUnitedStates.timeline.cases);

    // result.ukRecovered = sortTimeline(jsonUk.location.timelines.recovered.timeline);
    // result.italyRecovered = sortTimeline(jsonItaly.location.timelines.recovered.timeline);
    // result.spainRecovered = sortTimeline(jsonSpain.location.timelines.recovered.timeline);
    // result.germanyRecovered = sortTimeline(jsonGermany.location.timelines.recovered.timeline);
    // result.greeceRecovered = sortTimeline(jsonGreece.location.timelines.recovered.timeline);
    // result.franceRecovered = sortTimeline(jsonFrance.location.timelines.recovered.timeline);
    // result.swedenRecovered = sortTimeline(jsonSweden.location.timelines.recovered.timeline);

    return result;
}