<template>
    <Layout>
        <van-nav-bar title="编辑标签" left-arrow left-text="返回" @click-left="goBack">
        </van-nav-bar>
        <van-field label="标签名" placeholder="请输入标签名" left-icon="smile-comment-o" :value="CurrentTag.name" @input="updateTag">
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
        components: {Layout},
    })
    export default class EditLabel extends Vue {
        get CurrentTag(){
            return this.$store.state.currentTag
        }
        created(){
            const id  = this.$route.params.id
            this.$store.commit('fetchTags')
            this.$store.commit('setCurrentTag',id)
            if(!this.CurrentTag){
                this.$router.replace('/404')
            }

        }
        updateTag(name: string){
            if(this.CurrentTag){
                this.$store.commit('updateTag',{id:this.CurrentTag.id,name})
            }
        }
        removeTag(){
            if(this.CurrentTag){
                this.$store.commit('removeTag',this.CurrentTag.id)
                   this.$router.back()
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