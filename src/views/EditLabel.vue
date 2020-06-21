<template>
    <Layout>
        <van-nav-bar title="编辑标签" left-arrow left-text="返回">
        </van-nav-bar>
        <van-field label="标签名" placeholder="请输入标签名" left-icon="smile-comment-o" :value="tag.name" >
        </van-field>
        <div class="button-wrapper">
            <van-button class="remove-tag"  round color="linear-gradient(to right, #4bb0ff, #6149f6)">删除标签</van-button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import tagListModel from '@/models/tagListModel';
    @Component({
        components: {Layout}
    })
    export default class EditLabel extends Vue {
        tag?: {id: string ;name: string}= undefined
        created(){
            const id = this.$route.params.id
            tagListModel.fetch()
            const tags = tagListModel.data
            const tag = tags.filter(t => t.id === id)[0]
            if(tag){
                this.tag = tag
            }else {
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button-wrapper{
        text-align: center;
        .remove-tag{
            margin-top: 20vh;
        }
    }

</style>