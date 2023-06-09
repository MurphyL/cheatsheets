import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
    state() {
        return { dict: undefined };
    },
    actions: {
        init() {
            return fetch('/prepared/dict.json')
                .then(res => res.json())
                .then(data => {
                    this.dict = data;
                    return true;
                }).catch(err => {
                    console.error('fetch dict data error', err);
                    return false;
                })
        },
        getChannelData(unique) {
            if(!this.dict) {
                return Promise.reject('not ready');
            }
            // console.log('getChannelData', { unique, dict: this.dict });
            if (unique in this.dict.channels) {
                return Promise.resolve(this.dict.channels[unique]);
            } else if (unique in this.dict.alias) {
                const key = this.dict.alias[unique];
                return Promise.resolve(this.dict.channels[key]);
            } else {
                return Promise.reject('channel not exists');
            }
        }
    },
});