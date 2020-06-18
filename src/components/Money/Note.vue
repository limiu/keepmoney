<template>
    <div class="note">
        <van-field label="备注："
                   left-icon="smile-o"
                   placeholder="请在这里输入备注  ✍️"
        >
        </van-field>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Label extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>