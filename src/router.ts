import { createRouter, createHashHistory } from 'vue-router';
import BuyView from '@/buy/view/BuyView.vue';
import HomeView from '@/home/view/HomeView.vue';
import MyFavoritesView from '@/myfavorites/view/MyFavoritesView.vue';
import MySalesView from '@/mysales/view/MySalesView.vue';
import SellView from '@/sell/view/SellView.vue';

export const routerHistory = createHashHistory();
export default createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: HomeView, name: 'home', alias: '/home' },
    { path: '/home', component: HomeView, name: 'home' },
    { path: '/buy', component: BuyView, name: 'buy' },
    { path: '/my-favorites', component: MyFavoritesView, name: 'my-favorites' },
    { path: '/sell', component: SellView, name: 'sell' },
    { path: '/my-sales', component: MySalesView, name: 'my-sales' }
  ]
});
