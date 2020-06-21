<template>
    <div>
        <Layout>
            <ol class="tags">
                <li v-for="tag in tags" :key="tag.id">
                    <span>{{tag.name}}</span>
                    <van-icon name="arrow"></van-icon></li>
            </ol>
            <div class="button-wrapper">
                <van-button class="create-tag" @click="createTag" round color="linear-gradient(to right, #4bb0ff, #6149f6)">新建标签</van-button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import tagListModel from '@/models/tagListModel';
    tagListModel.fetch()
    @Component({
        components: {Layout}
    })
    export default class Label extends Vue {
        tags = tagListModel.data
        createTag(){
            const name = window.prompt('请输入标签名');
            if(name){
                const message = tagListModel.create(name)
                tagListModel.create(name)
                if(message === 'duplicated'){
                    window.alert('标签名重复了')
                }else if(message === 'success'){
                    window.alert('创建成功')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        font-size: 16px;
        li{
            background: white;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 0.1px solid #ddd;
            padding-left: 16px;
            padding-right: 16px;
        }
    }
    .button-wrapper{
        text-align: center;
      .create-tag{
          margin-top: 20vh;
      }
    }
</style>