import {createRouter } from 'vue-router';


const routes = [
    {
      path: "/",
      name: "home",
      component:  () => import('../views/Home.vue')
    }
];

const router = createRouter({
    routes
});

export default router;