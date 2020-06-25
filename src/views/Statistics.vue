<template>
        <Layout>
            <van-nav-bar title="keep记账"></van-nav-bar>
            <tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></tabs>
            <tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"></tabs>
                <ol>
                    <li v-for="(group,index) in result" :key="index">
                        <h3 class="title">{{group.title}}</h3>
                        <ol>
                            <li v-for="item in group.items" :key="item.id" class="record">
                                  <span>{{tagString(item.tags)}}</span>
                                    <span class="notes">{{item.notes}}</span>
                                    <span>¥{{item.amount}}</span>
                            </li>
                        </ol>
                    </li>
                </ol>
        </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import Tabs from '@/components/Tabs.vue';
    import intervalList from '@/constants/interval';
    import recordTypeList from '@/constants/recordTypeList';
    @Component({
        components: {Tabs, Layout}
    })
    export default class Statistics extends Vue {
        tagString(tags: Tag[]){
            return tags.length === 0? '无' : tags.join(',')
        }
        get recordList(){
            return (this.$store.state as RootState).recordList
        }
        get result(){
            const {recordList} = this;
            type HashTableValue = {title: string;items: RecordList[]}
            const hashTable: {[key: string]: HashTableValue}= {}
            for(let i = 0;i<this.recordList.length;i++){
            const [date,time]  =  recordList[i].createdAt!.split('T')
                console.log(date);
                hashTable[date] = hashTable[date] || {title:date ,items:[]};
                hashTable[date].items.push(recordList[i])
            }
            console.log(hashTable);
            return hashTable
        }
        beforeCreate(){
            this.$store.commit('fetchRecords')
        }
        type = '-';
        interval = 'day'
        intervalList = intervalList
        recordTypeList = recordTypeList
    }
</script>

<style lang="scss" scoped>
    ::v-deep .type-tabs{
        margin-bottom: 5px;
    }
    ::v-deep .interval-tabs-item {
        margin-top: 10px;
        height: 40px;
        background-color: white;
        color:rgb(25, 137, 250);
        &.selected{
            border-bottom: 2px solid rgb(25, 137, 250);
            background-color: white;
            color:rgb(25, 137, 250);
        }
    }
    .title{
        background-color:#d8e3e7;
        color: #21373d;
        margin: 0;
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .record{
        background-color:white;
        color: black;
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .notes{
        margin-right:auto ;
        margin-left: 16px;
        color: #999;
    }

</style>