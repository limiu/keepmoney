<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button class="ok" @click="ok">ok</button>
            <button @click="inputContent" class="zero">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        @Prop()  readonly value!: number;
        output = this.value.toString();
        inputContent(event: MouseEvent){
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent as string
            if(this.output.length === 16){return;}
            if(this.output === '0') {
                if ('0123456789'.indexOf(input) >= 0) {
                    this.output = input
                } else {
                    this.output += input
                }
                return
            }
                if(this.output.indexOf('.')>=0){
                    if(input === '.'){return;}
                }
                this.output += input
            }
        remove(){
            if (this.output.length === 1){
                this.output = '0'
            }else{
                this.output = this.output.slice(0,-1)
            }
        }
        clear(){
                this.output = '0'
        }
        ok(){
            this.$emit('update:value',this.output)
            this.$emit('submit',this.output)
            this.output='0'
            window.alert('保存成功')
        }
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