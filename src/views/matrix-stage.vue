<template>
    <div class="matrix" :class="$route.name">
        <span>{{ $route.name }} matrix</span>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    mounted() {
        this.fetchMeta();
    },
    watch: {
        '$route.name'() {
            this.fetchMeta();
        }
    },
    methods: {
        fetchMeta() {
            fetch(`/prepared/${this.$route.name}_meta.json`)
        }
    }
});

</script>

<style scoped lang="less">

</style>