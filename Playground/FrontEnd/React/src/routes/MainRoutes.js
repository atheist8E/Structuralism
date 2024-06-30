import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render
const Dashboard = Loadable(lazy(() => import('pages/dashboards/dashboard')));
const Periodical = Loadable(lazy(() => import('pages/dashboards/periodical')));
const Daily = Loadable(lazy(() => import('pages/dashboards/daily')));
const Anomaly = Loadable(lazy(() => import('pages/dashboards/anomaly')));
const Historical = Loadable(lazy(() => import('pages/dashboards/historical')));

const Alignment = Loadable(lazy(() => import('pages/extractors/alignment')));
const Overlay = Loadable(lazy(() => import('pages/extractors/overlay')));

const Test_0 = Loadable(lazy(() => import('pages/sketches/test_0')));
const Test_1 = Loadable(lazy(() => import('pages/sketches/test_1')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
        path: 'dashboards',
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'periodical',
            element: <Periodical />
          },
          {
            path: 'daily',
            element: <Daily />
          },
          {
            path: 'anomaly',
            element: <Anomaly />
          },
          {
            path: 'historical',
            element: <Historical />
          },
        ]
    },
    {
        path: 'extractors',
        children: [
          {
            path: 'alignment',
            element: <Alignment />
          },
          {
            path: 'overlay',
            element: <Overlay />
          },
        ]
    },
    {
      path: 'sketches',
      children: [
        {
          path: 'test_0',
          element: <Test_0 />
        },
        {
          path: 'test_1',
          element: <Test_1 />
        },
      ]
    },
  ]
};

export default MainRoutes;
