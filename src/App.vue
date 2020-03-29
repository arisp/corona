<template>
  <div>
    <DeathChart/>
    <div style="height: 25px"/>
    <CaseChart/>
    <div style="height: 25px"/>
    <LatestChart/>
  </div>
</template>


<script>

import DeathChart from './components/DeathChart.vue'
import CaseChart from './components/CaseChart.vue'
import LatestChart from './components/LatestChart.vue'

import { getTimelineData } from "./fetchData.js";
import { bus } from './main.js'

export default {
  components : {
    DeathChart,
    CaseChart,
    LatestChart
  },
  mounted() {
    getTimelineData().then(data => {
      bus.$emit('render', data);
    })
  }
}

var sdkInstance="appInsightsSDK";window[sdkInstance]="appInsights";var aiName=window[sdkInstance],aisdk=window[aiName]||function(e){function n(e){t[e]=function(){var n=arguments;t.queue.push(function(){t[e].apply(t,n)})}}var t={config:e};t.initialize=!0;var i=document,a=window;setTimeout(function(){var n=i.createElement("script");n.src=e.url||"https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js",i.getElementsByTagName("script")[0].parentNode.appendChild(n)});try{t.cookie=i.cookie}catch(e){ console.log("")}t.queue=[],t.version=2;for(var r=["Event","PageView","Exception","Trace","DependencyData","Metric","PageViewPerformance"];r.length;)n("track"+r.pop());n("startTrackPage"),n("stopTrackPage");var s="Track"+r[0];if(n("start"+s),n("stop"+s),n("setAuthenticatedUserContext"),n("clearAuthenticatedUserContext"),n("flush"),!(!0===e.disableExceptionTracking||e.extensionConfig&&e.extensionConfig.ApplicationInsightsAnalytics&&!0===e.extensionConfig.ApplicationInsightsAnalytics.disableExceptionTracking)){n("_"+(r="onerror"));var o=a[r];a[r]=function(e,n,i,a,s){var c=o&&o(e,n,i,a,s);return!0!==c&&t["_"+r]({message:e,url:n,lineNumber:i,columnNumber:a,error:s}),c},e.autoExceptionInstrumented=!0}return t}(
{
    instrumentationKey:"fc525196-eb79-4986-9d43-6a62411ab21d"
}
);window[aiName]=aisdk,aisdk.queue&&0===aisdk.queue.length&&aisdk.trackPageView({});

</script>

<style scoped>

</style>