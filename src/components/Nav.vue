<template>
    <van-tabbar route>
        <van-tabbar-item replace to="/money" icon="gold-coin-o">记账</van-tabbar-item>
        <van-tabbar-item replace to="/label" icon="label-o">标签</van-tabbar-item>
        <van-tabbar-item replace to="/statistics" icon="chart-trending-o">统计</van-tabbar-item>
    </van-tabbar>
</template>
<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>