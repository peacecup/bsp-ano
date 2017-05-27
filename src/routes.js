import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Default from './views/default.vue'
import A from './views/A.vue'
import leaseRight from './views/leaseRight.vue'
import C from './views/C.vue'

import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {
            path : '/',
            redirect : '/login'
        },
        {
            path : '/bsp',
            component : Home,
            children : [
                {
                    path : '/',
                    component : Default
                },
                {
                    path : '/A',
                    component : A
                },
                {
                    path : '/leaseRight',
                    component : leaseRight 
                },{
                    path : '/leaseRight-plus',
                    component : A
                },
                {
                    path : '/C',
                    component : C
                }
            ]
        },
        {
            path : '/login',
            component : Login
        }
    ]
})