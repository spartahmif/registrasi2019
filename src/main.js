import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './stylus/main.styl';
import VueRouter from 'vue-router'

// Setup routes
const routes = [
    {path: "/", component: () => import('./components/Closed')},
    {path: "/admin", component: () => import('./components/Admin')},
];

const router = new VueRouter({
    routes: routes,
    mode: 'history',
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
