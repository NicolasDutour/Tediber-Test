import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Concept from './views/Concept.vue'
import Testimonials from './views/Testimonials.vue'
import PubTv from './views/PubTv.vue'
import Blog from './views/Blog.vue'
import MyAccount from './views/MyAccount.vue'
import Cart from './views/Cart.vue'
import Presse from './views/Presse.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/concept',
            name: 'concept',
            component: Concept
        },
        {
            path: '/testimonials',
            name: 'testimonials',
            component: Testimonials
        },
        {
            path: '/pubtv',
            name: 'pubtv',
            component: PubTv
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/myaccount',
            name: 'myaccount',
            component: MyAccount
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/presse',
            name: 'presse',
            component: Presse
        }
    ]
})
