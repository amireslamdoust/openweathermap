import loadable from '@loadable/component'

export default [
  {
    path: '/',
    component: loadable(() => import('./pages/Dashboard')),
    exact: true,
  },
]
