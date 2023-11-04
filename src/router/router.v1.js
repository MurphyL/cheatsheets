import { createRouter, createWebHashHistory, RouterView } from 'vue-router';

import headerExtra from '@/views/header-extra.vue';
import globalConfig from '@/views/global-config.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        redirect: '/snippet',
        components: {
            header: () => import('@/views/header-navi.vue'),
            actions: headerExtra,
            default: RouterView,
            extra: () => import('@/views/extra-info.vue'),
        },
        children: [{
            path: 'config',
            name: 'global-config',
            components: {
                default: globalConfig,
            }
        }]
    }, {
        path: '/c/:channel',
        name: 'channel',
        components: {
            header: () => import('@/views/header-navi.vue'),
            actions: headerExtra,
            default: RouterView,
            extra: () => import('@/views/extra-info.vue'),
        },
        children: [{
            path: 'snippet',
            name: 'snippet',
            components: {
                default: () => import('@/views/matrix-stage.vue'),
            }
        }, {
            path: 'note',
            name: 'note',
            components: {
                default: () => import('@/views/matrix-stage.vue'),
            }
        }]
    }]
})

export default router
