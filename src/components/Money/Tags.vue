<template>
    <div class="tags">
        <van-tag round plain size="large" type="primary" class="van-tag"
                 v-for="tag in tagList"
                 :key="tag.id"
                 @click="toggle(tag)"
                 :class="{selected: selectedTags.indexOf(tag)>=0}"

        >
            {{tag.name}}
        </van-tag>
        <div>
            <button class="new-tag" @click="createTag">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import {mixins} from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';

    @Component({
        created() {
            this.$store.commit('fetchTags')
        }
    })
    export default class Tags extends mixins(TagHelper) {
        get tagList(){
            return this.$store.state.tagList;
        }
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