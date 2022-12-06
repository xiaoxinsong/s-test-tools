import Vue from 'vue';
import App from './App.vue';
import compnent from 's-tool-public';
Vue.use(compnent);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App)
}).$mount('#app');
