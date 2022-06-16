import React from 'react'
import { Home } from '../components/pages/Home'
import { Page404 } from '../components/pages/Page404'
import { Setting } from '../components/pages/Setting'
import { UserManagement } from '../components/pages/UserManagement'

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_management',
    exact: true,
    children: <UserManagement />,
  },
  {
    path: '/setting',
    exact: true,
    children: <Setting />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
]
