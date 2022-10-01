import { createRouter, createWebHistory } from 'vue-router';
import Details from './pages/coaches/Details';
import List from './pages/coaches/List';
import Register from './pages/coaches/Register';
import ContactCoach from './pages/requests/ContactCoach';
import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: List },
    {
      path: '/coaches/:id',
      component: Details,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: Register },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
