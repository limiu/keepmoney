<template>
    <div>
        <Layout>
            <div class="money-wrapper">
                {{recordList}}
                <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
                <Type :value.sync="record.type"></Type>
                <Note @update:value="onUpdateNotes"></Note>
                <Tags :data-source.sync="tags" @update:value="onUpdateTags "></Tags>
            </div>
        </Layout>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Type from '@/components/Money/Type.vue';
    import Note from '@/components/Money/Note.vue';
    import Tags from '@/components/Money/Tags.vue';
    type Record = {
        tags: string[];
        notes: string;
        type: string;
        amount: number;
        createdAt?: Date;
    }
    @Component({
        components: {Tags, Note, Type, NumberPad, Layout}
    })
    export default class Money extends Vue {
        tags = ['吃饭', '可乐', '游戏', '坐车'];
        recordList: Record[] =JSON.parse(window.localStorage.getItem('recordList')|| '[]')
        record: Record = {tags:[],notes:'',type:'-',amount:0}
        onUpdateTags(value: string[]) {
            this.record.tags = value
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }
        saveRecord(){
            const record2: Record = JSON.parse(JSON.stringify(this.record))
            record2.createdAt = new Date()
            this.recordList.push(record2)
        }
        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
        }
    }
</script>

<style lang="scss" scoped>
.money-wrapper{
        display: flex;
        flex-direction: column-reverse;
        height: 93.5vh;
    }
</style>