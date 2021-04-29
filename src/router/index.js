import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/homePage',
        name: 'homePage',
        component: () => import('@/views/homePage')
      }
    ]
  }
]

const router = new VueRouter({
  routes
});

export default router;
