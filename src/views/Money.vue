<template>
    <div>
        <Layout>
            <div class="money-wrapper">
                <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
                <Type :value.sync="record.type"></Type>
                <Note @update:value="onUpdateNotes"></Note>
                <Tags></Tags>
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

    @Component({
        components: {Tags, Note, Type, NumberPad, Layout},
    })
    export default class Money extends Vue {
        get recordList(){
            return this.$store.state.recordList
        }
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
        height: 93.5vh;
    }
</style>