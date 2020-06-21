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
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Type from '@/components/Money/Type.vue';
    import Note from '@/components/Money/Note.vue';
    import Tags from '@/components/Money/Tags.vue';
    import store from '@/store/index2';

    @Component({
        components: {Tags, Note, Type, NumberPad, Layout}
    })
    export default class Money extends Vue {
        tags = store.tagList;
        recordList = store.recordList
        record: RecordItem = {tags:[],notes:'',type:'-',amount:0}
        onUpdateTags(value: string[]) {
            this.record.tags = value
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }
        saveRecord(){
           store.createRecord(this.record)
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