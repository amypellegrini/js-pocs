import Vue from "vue";

Vue.component("jptv-header", {
  data: () => {
    return {
      pageTitle: "Online courses"
    };
  },
  template:
    '<header><h1><span>JazzPiano</span><span class="domain-suffix">TV</span></h1><hr /><p>{{pageTitle}}</p><hr /></header>'
});
