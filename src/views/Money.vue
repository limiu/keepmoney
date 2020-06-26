<template>
    <div>
        <Layout>
            <div class="money-wrapper">
                <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
                <Tabs :data-source="recordTypeList" :value.sync="record.type"></Tabs>
                <Note @update:value="onUpdateNotes"></Note>
                <Tags @update:value="record.tags = $event"></Tags>
            </div>
        </Layout>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Note from '@/components/Money/Note.vue';
    import Tags from '@/components/Money/Tags.vue';
    import recordTypeList from '@/constants/recordTypeList';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {Tabs, Tags, Note, NumberPad, Layout},
    })
    export default class Money extends Vue {
        @Prop(Number) readonly value!: number
        get recordList(){
            return this.$store.state.recordList
        }
        recordTypeList = recordTypeList
        record: RecordItem = {tags:[],notes:'',type:'-',amount:0};
        created(){
            this.$store.commit('fetchRecords')
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }
        saveRecord(){
           this.$store.commit('createRecord',this.record)
        }
    }
</script>

<style lang="scss" scoped>
.money-wrapper{
        display: flex;
        flex-direction: column-reverse;
    height: 93vh;
    }
</style>