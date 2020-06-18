<template>
    <div class="tags">
        <van-tag round plain size="large" type="primary" class="van-tag">
            吃饭
        </van-tag>
        <van-tag round plain size="large" type="primary" class="van-tag">
            喝酒
        </van-tag>
        <van-tag round plain size="large" type="primary" class="van-tag">
            打游戏
        </van-tag>
        <van-tag round plain size="large" type="primary" class="van-tag">
            坐车
        </van-tag>
        <div>
            <button class="new-tag">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {

    }
</script>

<style lang="scss" scoped>
    .tags{
        padding:16px;
        .van-tag{
            margin: 5px;
        }
        .new-tag{
            background-color: transparent;
            border: none;
            border-bottom: 0.1px solid #999;
            padding-top: 16px;
        }
    }
</style>