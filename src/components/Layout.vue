<template>
    <div class="layout-wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <Nav></Nav>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Nav from '@/components/Nav.vue';
    @Component({
        components: {Nav}
    })
    export default class Layout extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>