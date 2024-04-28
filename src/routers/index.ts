const routes = [
  {
    path: '/login',
    component: 'login',
  },

  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/project',
        component: 'project',
      },
      {
        path: '/material',
        component: 'material',
      },
      {
        path: '/preview',
        component: 'preview',
      },
    ],
  },
];
export default routes;
