<template>
    <div class="bar">
        <div class="channel">
            <div class="display">{{ channelInfo?.display }}</div>
            <ul class="suggest">
                <li v-for="channel in channels">
                    <span>{{ channel.display }}</span>
                </li>
            </ul>
        </div>
        <div class="navi">
            <RouterLink to="/snippet">代码片段</RouterLink>
            <RouterLink to="/note">笔记</RouterLink>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import { chain } from 'lodash';

import { channels } from '@/plug/dict.json';

export default defineComponent({
    props: {
        channel: {
            type: String,
            default: 'java'
        }
    },
    setup() {
        return {
            channels
        };
    },
    mounted() {
        console.log('channelInfo', this.channelInfo);
    },
    computed: {
        channelInfo() {
            return chain(this.channels).find({ unique: this.channel }).value();
        }
    }
});

</script>


<style scoped lang="less">
.bar {
    display: grid;
    grid-template-columns: 200px auto;

    .channel {
        text-align: center;

        .suggest {
            display: none;
            margin: 0;
            padding: 0;
            list-style: none;
        }
    }

    .navi {
        display: grid;
        grid-template-columns: repeat(10, 5rem);
        grid-column-gap: 10px;

        text-align: center;
    }
}
</style>