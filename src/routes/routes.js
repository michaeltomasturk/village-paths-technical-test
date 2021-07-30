import { lazy } from 'react';

const routes = [
  {
    path: 'main',
    component: lazy(() => import('features/Main/MainPage')),
    exact: true,
  },
];

export default routes;
