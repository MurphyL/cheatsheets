<template>
    <div v-if="payload">
        <h2>{{ payload?.label }}</h2>
        <p>{{ payload?.summary }}</p>
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
        return { payload: null }
    },
    mounted() {
        const { unique } = this.$route.params;
        this.commonStore.getChannelData(unique).then(res => {
            this.payload = res;
        });
    }
});

</script>