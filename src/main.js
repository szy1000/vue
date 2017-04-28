// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
// VueResource for ajax
import VueResource from 'vue-resource';
import App from './App';
import seller from 'components/seller/seller.vue';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/seller', name: 'seller', component: seller},
  {path: '/goods', name: 'goods', component: goods},
  {path: '/ratings', name: 'ratings', component: ratings}
  ];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

router.replace('/goods');

// router.push('/goods')
