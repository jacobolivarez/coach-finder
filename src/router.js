import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index.js';
import List from './pages/coaches/List';
import NotFound from './pages/NotFound.vue';

const Details = () => import('./pages/coaches/Details');
const Register = () => import('./pages/coaches/Register');
const ContactCoach = () => import('./pages/requests/ContactCoach');
const RequestsReceived = () => import('./pages/requests/RequestsReceived');
const UserAuth = () => import('./pages/auth/UserAuth');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: List },
    {
      path: '/coaches/:id',
      component: Details,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: Register, meta: { requiresAuth: true} },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true} },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true} },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
