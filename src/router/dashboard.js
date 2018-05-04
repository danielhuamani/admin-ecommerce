import Dashboard from '@/pages/system/Dashboard'
import Profile from '@/pages/system/Profile'
import ChangePass from '@/pages/system/ChangePass'
const dashboardRouter = [
  {
    path: 'dashboard',
    component: Dashboard,
    name: 'dashboard'
  },
  {
    path: 'perfil',
    component: Profile,
    name: 'profile'
  },
  {
    path: 'cambiar-contrasena',
    component: ChangePass,
    name: 'change_pass'
  }
]

export default dashboardRouter
