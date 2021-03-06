
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import 'babel-polyfill';
import 'whatwg-fetch';

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Helpers/router.js';
import User from './Helpers/User';

window.User = User;
window.EventBus = new Vue();

Vue.use(Vuetify);

import VueSimplemde from 'vue-simplemde'
Vue.use(VueSimplemde)
import md from 'marked';
window.md = md;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('AppHome', require('./components/AppHome.vue').default);
Vue.component('DashboardHome', require('./components/Dashboard/DashboardHome.vue').default);
//Vue.component('AppBody', require('./components/AppBody.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
