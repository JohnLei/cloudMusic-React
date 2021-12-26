import React from "react";
import { Redirect } from "react-router";

import HYDiscover from '@/pages/discover'

import HYRecommend from '@/pages/discover/c-pages/recommend'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: HYDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        exact: true,
        component: HYRecommend
      }
    ]
  }
]

export default routes