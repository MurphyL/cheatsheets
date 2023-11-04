<template>
    <header class="header">
        <RouterView class="navi" name="header" />
        <RouterView class="extra" name="actions" />
    </header>
    <main class="main" v-if="ready">
        <RouterView class="stage" />
        <RouterView class="extra" name="extra" />
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import { useCommonStore } from '@/stores/common_store';

export default defineComponent({
    data() {
        return { ready: false };
    },
    mounted() {
        fetch('/prepared/dict.json')
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }
});
</script>

<style lang="less">
body,
#app {
    --top-height: 50px;

    margin: 0;
    padding: 0;
}

#app {
    height: 100vh;
    overflow: hidden;
}
</style>

<style scoped lang="less">
.header {
    display: grid;
    grid-template-columns: auto 20%;
    grid-column-gap: 10px;

    padding: 0 10px;

    height: var(--top-height);
    line-height: var(--top-height);

    .extra {
        display: grid;
        justify-content: right;
    }
}

.main {
    display: grid;
    grid-template-columns: auto 300px;
    grid-column-gap: 10px;

    height: calc(100% - var(--top-height));
}
</style>