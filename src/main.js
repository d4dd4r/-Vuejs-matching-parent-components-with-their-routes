import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import List from './list.vue'
import Layout from './layout.vue'
import Random from './random.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    name: 'Home',
    children: [
      {
        path: 'list',
        component: List,
        name: 'List',
        children: [
          { path: ':id', name: 'List detail', component: Random },
        ],
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const checkRoutes = routes => routes.forEach(route => {
  if (!route.component || !route.component.mixins.length) return;

  const myMixin = route.component.mixins.find(mixin => (
    mixin.beforeRouteEnter && mixin.beforeRouteEnter.isCustomMixin
  ));

  if (myMixin) {
    route.component.mixins.push({
      mounted() {
        this._route = route;
      },
    });
  }

  if (route.children) checkRoutes(route.children);
});

checkRoutes(routes);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
