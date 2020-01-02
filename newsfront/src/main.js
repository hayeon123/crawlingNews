import Vue from "vue";
import App from "./App.vue";
import router from './router';
import './plugins/element.js'
//import store from './store/index'

Vue.config.productionTip = false;

new Vue({
    router,
    beforeCreate() {
        this.$store.dispatch('getMemberInfo')
    },
    render: h => h(App)
}).$mount("#app");