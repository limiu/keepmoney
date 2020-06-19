<template>
    <div class="note">
        <van-field label="备注："
                   left-icon="smile-o"
                   placeholder="请在这里输入备注  ✍️"
                   v-model="value"
        >
        </van-field>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';

    @Component
    export default class Label extends Vue {
        value = ''
        @Watch('value')
        onValueChanged(value: string){
            this.$emit('update:value',value)
        }
    }
</script>

<style lang="scss" scoped>

</style>