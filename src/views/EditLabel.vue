<template>
    <Layout>
        <van-nav-bar title="编辑标签" left-arrow left-text="返回" @click-left="goBack">
        </van-nav-bar>
        <van-field label="标签名" placeholder="请输入标签名" left-icon="smile-comment-o" :value="tag.name" @input="updateTag">
        </van-field>
        <div class="button-wrapper">
            <van-button class="remove-tag" @click="removeTag" round color="linear-gradient(to right, #4bb0ff, #6149f6)">
                删除标签
            </van-button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    @Component({
        components: {Layout}
    })
    export default class EditLabel extends Vue {
        tag?: Tag = undefined
        created(){
            //TODO
                //this.tag = store.findTag(this.$route.params.id)
            if(!this.tag){
                this.$router.replace('/404')
            }

        }
        updateTag(name: string){
            if(this.tag){
                //TODO
                //store.updateTag(this.tag.id,name)
            }
        }
        removeTag(){
            if(this.tag){
                //TODO
                return
               //if (store.removeTag(this.tag.id)){
                   //this.$router.back()
               //}else {
                   //window.alert('删除失败')
               }
            }
        goBack(){
            this.$router.back()
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