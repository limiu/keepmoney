<template>
    <div class="tags">
        <van-tag round plain size="large" type="primary" class="van-tag"
                 v-for="tag in dataSource"
                 :key="tag.id"
                 @click="toggle(tag)"
                 :class="{selected: selectedTags.indexOf(tag)>=0}"

        >
            {{tag.name}}
        </van-tag>
        <div>
            <button class="new-tag" @click="create">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        @Prop(Array) dataSource: string[] | undefined;
        selectedTags: string[] =[];
        toggle(tag: string){
            const index = this.selectedTags.indexOf(tag)
            if(this.selectedTags.indexOf(tag)>=0){
                this.selectedTags.splice(index,1)
            }else {
                this.selectedTags.push(tag)
            }
            this.$emit('update:value',this.selectedTags)
        }
        create(){
          const name =  window.prompt('请输入标签名')
            if(name === ''){
                window.alert('标签名不能为空')
            }else if(this.dataSource){
                    this.$emit('update:dataSource',[...this.dataSource,name])

            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags{
        padding:16px;
        .van-tag{
            margin: 5px;
            &.selected{
                background-color:rgb(25, 137, 250) ;
                color: white;
            }
        }
        .new-tag{
            background-color: transparent;
            border: none;
            border-bottom: 0.1px solid #999;
            padding-top: 16px;
        }
    }
</style>