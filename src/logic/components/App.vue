<script lang="ts">
    import { defineComponent } from "vue";
    import VeeValidateExamples from "./vue/ui/VeeValidateExamples.vue";

    export default defineComponent( {
        components:{
            VeeValidateExamples,
        },
        
    } );
</script>

<template>

    <div class="main">
        <div>
            <h1>Formación-vee-validate</h1>
            <p class="testing"><i><a href="https://vee-validate.logaretm.com/v4/guide/overview">Official Doc</a></i></p>

        </div>
        <VeeValidateExamples/>
    </div>

</template>

<style lang="scss">
.main{}
</style>


