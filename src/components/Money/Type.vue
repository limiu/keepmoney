<template>
    <div>
        <ul class="types">
            <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export default class Type extends Vue {
        @Prop() readonly value!: string;
        selectType(value: string){
            this.$emit('update:value',value)
        }
    }
</script>

<style lang="scss" scoped>
    .types{
        background: white;
        display: flex;
        text-align: center;
        font-size: 24px;
        color: rgb(25, 137, 250);
        li{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            &.selected{
                background:rgb(25, 137, 250);
                color: white;
            }
        }
    }
</style>