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
import CreateQuestion from '../components/Dashboard/CreateQuestion';
import ShowQuestion from '../components/Dashboard/ShowQuestion';


const routes = [
    { path: '/', component: AppBody, name: 'AppBody' },
    { path: '/dashboard/login', component: login, name: 'login' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/dashboard/questions/:edit', component: EditQuestion, name:'edit'},
    { path: '/dashboard/questions', component: ShowQuestion, name:'questions'},
    { path: '/dashboard/create', component: CreateQuestion, name:'create'}

];

const router = new VueRouter({
    routes,
    hashbang : false,
    mode: 'history'
});

export default router;
