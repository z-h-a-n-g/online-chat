import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/main/chat'
  },
  {
    //开始菜单页面
    path: '/main',
    name: 'main',
    component: () => import('../views/main/index.vue'),
    children: [
      {
        //设置个人信息路由
        path: 'settings_pi',
        name: 'settings_pi',
        component: () => import('../views/user/index.vue')
      },
      {
        //对话路由
        path: 'chat',
        name: 'chat',
        component: () => import('../views/chat/index.vue')
      },
      {
        //历史页面路由
        path: 'history',
        name: 'history',
        component: () => import('../views/history/index.vue')
      },
      {
        //统计页面路由
        path: 'statistics',
        name: 'statistics',
        component: () => import('../views/statistics/index.vue')
      },
      {
        //客户页面路由
        path: 'customer',
        name: 'customer',
        component: () => import('../views/customer/index.vue')
      },
      {
        //设置页面路由
        path: 'settings',
        name: 'settings',
        component: () => import('../views/settings/index.vue')
      }
    ]
  },
  {
    path: '/main/chat',
    name: 'chat',
    component: () => import('../views/chat/index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
