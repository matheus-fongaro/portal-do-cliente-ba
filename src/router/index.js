import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'

//Layouts
const BlankLayout = () => import("@/layouts/BlankLayout")
const Layout2 = () => import("@/layouts/backend/Layout-2")

//Páginas principais
const Titulos = () => import('@/views/backend/Pages/Principais/Titulos')
const TitulosPagos = () => import('@/views/backend/Pages/Principais/TitulosPagos')
const Pedidos = () => import('@/views/backend/Pages/Principais/Pedidos')
const VerPedidos = () => import('@/views/backend/Table/VerPedidos')
const Home = () => import('@/views/backend/Dashboards/Home')

//Páginas de autenticação
const SignIn = () => import('@/views/backend/Auth/SignIn')
const SignUp = () => import('@/views/backend/Auth/SignUp')
const RecoverPassword = () => import('@/views/backend/Auth/RecoverPassword')
const ConfirmMail = () => import('@/views/backend/Auth/ConfirmMail')

// Páginas de erro
const Error404 = () => import('@/views/backend/Pages/Error/Error404')
// const Erro500 = () => import('@/views/backend/Error/Erro500') <-- Comentado porque não está sendo usado ainda

Vue.use(VueRouter)

const rotasDeAutenticacao = () => [
  {
    path: 'login',
    name: 'auth.login',
    meta: { name: 'SignIn' },
    component: SignIn
  },
  {
    path: 'registrar',
    name: 'auth.register',
    meta: { name: 'SignUp' },
    component: SignUp
  },
  {
    path: 'recuperar-senha',
    name: 'auth.recover-password',
    meta: { name: 'Recover Password' },
    component: RecoverPassword
  },
  {
    path: 'email-enviado',
    name: 'auth.confirm-mail',
    meta: { name: 'Confirm Mail' },
    component: ConfirmMail
  },

]

const principais = () => [
  {
    path: '',
    name: 'principais.home',
    meta: { name: 'Home' },
    component: Home
  },
  {
    path: '/pedidos',
    name: 'principais.pedidos',
    meta: { name: 'Pedidos' },
    component: Pedidos
  },
  {
    path: '/verPedidos',
    name: 'pedidos.verPedidos',
    meta: { name: 'VerPedidos' },
    component: VerPedidos
  },
  {
    path: '/titulos',
    name: 'principais.titulos',
    meta: { name: 'Titulos' },
    component: Titulos
  },
  {
    path: '/titulos-pagos',
    name: 'principais.titulos-pagos',
    meta: { name: 'TítulosPagos' },
    component: TitulosPagos
  }

]

const routes = [
  {
    path: '',
    name: 'layout-2',
    component: Layout2,
    meta: {
      requiresAuth: true
    },
    children: principais()
  },
  {
    path: '/auth',
    name: 'auth',
    component: BlankLayout,
    children: rotasDeAutenticacao()
  },
  {
    path: '*',
    name: 'error.404',
    meta: { name: 'Error 404' },
    component: Error404
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next({ name: 'auth.login' })
  else if (currentUser && to.name == 'auth') next('Home')
  else if (!requiresAuth && currentUser) next()
  else next()
})

export default router
