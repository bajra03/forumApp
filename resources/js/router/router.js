import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/signup'
import Forum from '../components/forum/Forum'

const routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/forum',
        component: Forum,
        name: 'forum'
    }
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hasbang: false, // for disable # in url
    mode: 'history' // for disable # in url
})

export default router
