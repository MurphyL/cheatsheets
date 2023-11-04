<template>
    <header class="header">
        <RouterView class="left" name="header" />
        <RouterView class="right" name="actions" />
    </header>
    <main class="main" v-if="ready">
        <RouterView class="left" />
        <RouterView class="right" name="extra" />
    </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { ready: false };
    },
    mounted() {
        fetch('/prepared/dict.json')
            .then(res => res.json())
            .then(res => {
                this.ready = true;
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

    .right {
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