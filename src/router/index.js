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
        path: '/Monitor',
        name: 'Monitor',
        component: () => import('@/views/Monitor')
      },
      {
        // 运行监视 -> 主接线图
        path: '/MainWiring',
        name: 'MainWiring',
        component: () => import('@/views/MainWiring')
      },
      {
        //  运行监视 —> 在线表计
        path: '/OnlineMeter',
        name: 'OnlineMeter',
        component: () => import('@/views/OnlineMeter')
      },
      {
        // 运行监视 -> 在线表计 -> 展示列表
        path: '/meterManifestation',
        name: 'meterManifestation',
        component: () => import('@/components/onlineMeter/meterManifestation')
      },
      {
        //  运行监视 -> 配电设备
        path: '/ControllerSwitching',
        name: 'ControllerSwitching',
        component: () => import('@/views/ControllerSwitching')
      },
      {
        //  运行监视 -> 表计数据
        path: '/MeterData',
        name: 'MeterData',
        component: () => import('@/views/MeterData')
      },
      {
        //  运行监视 -> 运行数据
        path: '/OperatingData',
        name: 'OperatingData',
        component: () => import('@/views/OperatingData')
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
      },
      {
        //  报警事件
        path: '/AlarmEvents',
        name: 'AlarmEvents',
        component: () => import('@/views/AlarmEvents')
      }
    ]
  }
]

const router = new VueRouter({
  routes
});

export default router;
