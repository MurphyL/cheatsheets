import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/stack'
        },
        {
            path: '/stack',
            name: 'teck_stack',
            component: () => import('@/views/tech_stack/tech_stack_matrix.vue')
        }, 
        {
            path: '/channel/:unique',
            name: 'teck_stack_details',
            components: {
                default: () => import('@/views/tech_stack/tech_stack_details/tech_stack_main.vue'),
                meta: () => import('@/views/tech_stack/tech_stack_details/tech_stack_meta.vue'),
                refs: () => import('@/views/tech_stack/tech_stack_details/tech_stack_refs.vue'),
            },
        }
    ]
})

export default router
