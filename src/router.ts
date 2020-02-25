import {createRouter, createHashHistory} from 'vue-router';
import BuyView from '@/buy/view/BuyView.vue';
import HomeView from '@/home/view/HomeView.vue';

export const routerHistory = createHashHistory();
export default createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: HomeView, name: 'home', alias: '/home'},
    { path: '/home', component: HomeView, name: 'home' },
    { path: '/buy', component: BuyView, name: 'buy' }
  ]
});
