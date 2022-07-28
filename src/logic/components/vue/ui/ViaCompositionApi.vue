<script lang="ts">
    import { computed, defineComponent, toRef } from "vue";
    import { Field, useField, useForm } from 'vee-validate';
    import {formSchema} from './yupSchemas/formSchema'


    export default defineComponent( {
        components:{
            Field
        },
        setup(){
            const { handleSubmit, errors } = useForm({
                initialValues: {
                    name: "",
                    cp: "",
                    password: "",
                },
                validationSchema: formSchema
            });
            const onSubmit = handleSubmit((values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.resetForm();
            });
            return {
                errors,
                onSubmit,
            };
        }
        
    } );
</script>

<template>

    <div>
        <h3>Vee-validate: ViaCompositionApi</h3>

        <div>
            <form @submit.prevent="onSubmit">
                <div>
                    <label>Name</label>
                    <Field 
                        name="name" 
                        type="text" 
                        placeholder="Name without test" 
                        :validateOnInput="true"
                    >
                    </Field>
                    <p v-if="errors.name">{{ errors.name }}</p>
                </div>
                
                
                <div>
                    <label>Código Postal</label>
                    <Field
                        name="cp"
                        type="text"
                        placeholder="Código postal"
                        :validateOnInput="true"
                    />
                    <p v-if="errors.cp">{{ errors.cp }}</p>
                </div>
                
                <div>
                    <label>Password</label>
                    <Field name="password" 
                           type="password"
                           placeholder="Password"
                           :validateOnInput="true"
                    />
                    <p v-if="errors.password">{{ errors.password }}</p>
                </div>

                <input type="submit"/>
            </form>
        </div>

    </div>

</template>