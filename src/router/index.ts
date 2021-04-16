import { createRouter, createWebHashHistory } from 'vue-router';


const routers = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/pages/Home.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/About.vue')
  }]
});

routers.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
});

export default routers;