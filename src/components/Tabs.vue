<template>
    <ul class="tabs" :class="{[classPrefix + '-tabs']: classPrefix}">
        <li class="tabs-item" v-for="item in dataSource" :key="item.value" :class="liClass(item)" @click="select(item)">{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    type DataSourceItem = {text: string;value: string}
    @Component
    export default class Tabs extends Vue {
        @Prop({required:true,type:Array})
        dataSource!: DataSourceItem[]
        @Prop(String) readonly value!: string;
        @Prop(String) classPrefix?: string
        liClass(item: DataSourceItem){return {selected:item.value === this.value,[this.classPrefix + '-tabs-item']:this.classPrefix}}
        select(item: DataSourceItem){
            this.$emit('update:value',item.value)
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{
        background: white;
        display: flex;
        text-align: center;
        font-size: 24px;
        color: rgb(25, 137, 250);
        &-item{
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