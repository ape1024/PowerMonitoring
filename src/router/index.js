import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
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
      },
      {
        path: '/monitor',
        name: 'monitor',
        component: () => import('@/views/monitor')
      }
    ]
  }
]

const router = new VueRouter({
  routes
});

export default router;
