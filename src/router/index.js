import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/products',
        component: ProductsView
    },
    {
        path: '/products/:id',
        component: ProductDetailView
    },
    {
        path: '/cart',
        component: CartView
    },
    {
        path: '/contact',
        component: ContactView
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})