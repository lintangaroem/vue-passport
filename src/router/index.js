//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'post.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Index.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/post/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/post/Edit.vue')
    },
    {
        path: '/',
        name: 'barang.index',
        component: () => import( /* webpackChunkName: "barang.index" */ '@/views/barang/Index.vue')
    },
    {
        path: '/create',
        name: 'barang.create',
        component: () => import( /* webpackChunkName: "barang.create" */ '@/views/barang/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'barang.edit',
        component: () => import( /* webpackChunkName: "barang.edit" */ '@/views/barang/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router