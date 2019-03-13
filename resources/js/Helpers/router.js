/**
 * Created by jay on 2019-03-12
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import login from './login';
import logout from './logout';
import AppBody from '../components/AppBody';
import EditQuestion from '../components/Dashboard/EditQuestion';


const routes = [
    { path: '/', component: AppBody, name: 'AppBody' },
    { path: '/login', component: login, name: 'login' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/dashboard/questions', component: EditQuestion, name:'questions'}
];

const router = new VueRouter({
    routes,
    hashbang : false,
    mode: 'history'
});

export default router;
