<template>
    <div>
        <Layout>
            <div class="tags">
                <router-link v-for="tag in tags" :key="tag.id" :to="`/label/edit/${tag.id}`" class="tag">
                    <span>{{tag.name}}</span>
                    <van-icon name="arrow"></van-icon>
                </router-link>
            </div>
            <div class="button-wrapper">
                <van-button class="create-tag" @click="createTag" round color="linear-gradient(to right, #4bb0ff, #6149f6)">新建标签</van-button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import {mixins} from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';
    @Component({
        components: {Layout},
        computed:{
            tags(){
               return  this.$store.state.tagList
            }
        }
    })
    export default class Label extends mixins(TagHelper) {
        created(){
            this.$store.commit('fetchTags')
        }

    }
</script>

<style lang="scss" scoped>
    .tags {
        font-size: 16px;
        .tag{
            color: #2c3e50;
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