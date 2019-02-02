import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Signup from '../components/login/signup'

const routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hasbang: false, // for disable # in url
    mode: 'history' // for disable # in url
})

export default router
