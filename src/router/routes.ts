import type { RouteRecordRaw } from 'vue-router'

const Main = () => import('@/layout/Main/index.vue')

export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        name: 'Demo',
        meta: {
          title: 'Demo',
          icon: 'dashboard'
        }
      },
      {
        path: 'system/tenant/list',
        component: () => import('@/views/system/tenant/index.vue'),
        name: 'Demo',
        meta: {
          title: 'Demo',
          icon: 'dashboard'
        }
      }
    ]
  }
]
