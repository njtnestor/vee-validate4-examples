<script lang="ts">
    import { defineComponent } from "vue";
    import ViaComponents from "./ViaComponents.vue";
    import ViaCompositionApi from "./ViaCompositionApi.vue";

    export default defineComponent( {
        components:{
            ViaComponents,
            ViaCompositionApi
        },
        
    } );
</script>

<template>
    <div class="row">
        <div class="column">
            <ViaComponents/>
        </div>
        <div class="column">
            <ViaCompositionApi/>
        </div>
    </div>
</template>

<style lang="scss" scoped>


    .row{
        display: flex;
        .column {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 1;
            padding: 20px;
        }
    }

</style>



