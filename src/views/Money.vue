<template>
    <div>
        <Layout>
            <div class="money-wrapper">
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
    import recordListModel from '@/models/recordListModel';
    import tagListModel from '@/models/tagListModel';
    const recordList = recordListModel.fetch()
    const tagList = tagListModel.fetch()
    @Component({
        components: {Tags, Note, Type, NumberPad, Layout}
    })
    export default class Money extends Vue {
        tags = tagList;
        record: RecordItem = {tags:[],notes:'',type:'-',amount:0}
        onUpdateTags(value: string[]) {
            this.record.tags = value
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }
        saveRecord(){
            const record2: RecordItem = recordListModel.clone(this.record)
            record2.createdAt = new Date()
            this.recordList.push(record2)
        }
        @Watch('recordList')
        onRecordListChange(){
            recordListModel.save(this.recordList)
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