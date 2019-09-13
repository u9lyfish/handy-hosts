export default [
  {
    path: '/ip',
    name: 'ip',
    component: require('@/components/IP').default,
    meta: {
      icon: 'IP',
      title: 'Manage by IP'
    }
  },
  {
    path: '/domain',
    name: 'domain',
    component: require('@/components/Domain').default,
    meta: {
      icon: 'www',
      title: 'Manage by Domain'
    }
  },
  {
    path: '/',
    redirect: '/ip'
  }
]
