<template>
    <div v-if="ready">
        <RouterView name="meta" class="meta" />
        <RouterView class="main" />
        <RouterView name="refs" class="refs" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useCommonStore } from '@/stores/common_store';

export default defineComponent({
    setup() {
        const commonStore = useCommonStore();
        return { commonStore };
    },
    data() {
        return { ready: false };
    },
    mounted() {
        this.commonStore.init().then(() => {
            console.log('app ready');
            this.ready = true;
        });
    }
});
</script>

<style scoped>
:global(body, #app) {
    margin: 0;
    padding: 0;
}
</style>