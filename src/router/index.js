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
        // 首页
        path: '/HomePage',
        name: 'HomePage',
        component: () => import('@/views/HomePage')
      },
      {
        // 运行监视 -> 回路数据
        path: '/monitor',
        name: 'monitor',
        component: () => import('@/views/monitor')
      },
      {
        // 运行监视 -> 主接线图
        path: '/mainWiring',
        name: 'mainWiring',
        component: () => import('@/views/mainWiring')
      },
      {
        // 数据分析 -> 电力统计
        path: '/ElectricityStatistics',
        name: 'ElectricityStatistics',
        component: () => import('@/views/ElectricityStatistics')
      },
      {
        // 数据分析 -> 电量定制
        path: '/ElectricityCustom',
        name: 'ElectricityCustom',
        component: () => import('@/views/ElectricityCustom')
      },
      {
        // 数据分析 -> 历史数据
        path: '/HistoricalData',
        name: 'HistoricalData',
        component: () => import('@/views/HistoricalData')
      },
      {
        // 数据分析 -> 负荷时比
        path: '/LoadThan',
        name: 'LoadThan',
        component: () => import('@/views/LoadThan')
      },
      {
        // 数据分析 -> 最大负荷
        path: '/MaximumLoad',
        name: 'MaximumLoad',
        component: () => import('@/views/MaximumLoad')
      },
      {
        //  数据分析 -> 负荷类比
        path: '/LoadAnalogy',
        name: 'LoadAnalogy',
        component: () => import('@/views/LoadAnalogy')
      },
      {
        //  电量统计 -> 日电量统计
        path: '/DayPower',
        name: 'DayPower',
        component: () => import('@/views/DayPower')
      },
      {
        //  电量统计 -> 月电量统计
        path: '/MonthPower',
        name: 'MonthPower',
        component: () => import('@/views/MonthPower')
      },
      {
        //  电量统计 -> 年电量统计
        path: '/YearPower',
        name: 'YearPower',
        component: () => import('@/views/YearPower')
      }
    ]
  }
]

const router = new VueRouter({
  routes
});

export default router;
