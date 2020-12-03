import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Deck from '../views/Deck.vue';
import List from '../views/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/deck',
    name: 'Deck',
    component: Deck,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
