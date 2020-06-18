<template>
    <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">ok</button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {

    }
</script>

<style lang="scss" scoped>
    .numberPad{
        .output{
            font-size: 36px;
            font-family: monospace;
            padding: 9px 16px;
            text-align: right;
        }
        .buttons{
            &::after{
                content: '';
                clear: both;
                display: block;
            }
            button{
                background-color: white;
                border: 0.1px solid #ddd;
                float: left;
                width: 25%;
                height:64px;
                &.ok{
                    height: 64*2px;
                    float: right;
                }
                &.zero{
                    width: 50%;
                }
            }
        }
    }
</style>