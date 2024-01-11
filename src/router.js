import { createRouter , createWebHistory } from "vue-router";
import HomePage from './views/HomePage.vue';
import SinglePetpage from "./views/SinglePetpage.vue";


const routes = [
    {
        path : '/', // Home Page 
        name : 'HomePage',
        component : HomePage,
    },
    {
        path : '/pet/:id', //singlepetpage 
        name : 'petPage',
        component : SinglePetpage,
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes : routes,
})

export default router;