import { createRouter, createWebHashHistory } from 'vue-router';

import headerExtra from '@/views/header-extra.vue';
import globalConfig from '@/views/global-config.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        redirect: '/matrix'
    }, {
        path: '/config/global',
        name: 'global-config',
        components: {
            actions: headerExtra,
            header: () => import('@/views/snippets/snippet-header.vue'),
            default: globalConfig,
        }
    }, {
        path: '/matrix',
        name: 'cheatsheet_matrix',
        components: {
            actions: headerExtra,
            header: () => import('@/views/snippets/snippet-header.vue'),
            default: () => import('@/views/snippets/snippet-matrix.vue'),
            extra: () => import('@/views/snippets/snippet-extra-info.vue'),
        }
    }]
})

export default router
