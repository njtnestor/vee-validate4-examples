<script lang="ts">
    import { defineComponent } from "vue";
    import {Form, Field, ErrorMessage, defineRule} from "vee-validate";
    import VueJsonPretty from 'vue-json-pretty';
    import 'vue-json-pretty/lib/styles.css';
    import * as yup from 'yup';
    import {formSchema} from './yupSchemas/formSchema'

    export default defineComponent( {
        components:{
            Form,
            Field,
            ErrorMessage,
            VueJsonPretty,
        },
        data(){
            return{
                viaComponentsValidationSchema: formSchema,
                formValues : {
                    name: '',
                    cp: '',
                    password: ''
                }
            }
        },
        created(){
            defineRule( "noIncludeTest", (value: string, params: any) => {
                if (value.includes('test')) {
                    return 'test word is not allowed';
                }
                return true;
            });
            defineRule( "isCp", (value: string, params: any) => {
                var reg = new RegExp('^[0-9]+$');
                if (value.length === 5 && reg.test(value)) {
                    return true;
                    
                }
                return 'invalid cp format';
            });
        },
        methods: {
            onSubmit(values) {
               console.log(values)
            }
        }
    })
</script>

<template>

    <div>
        <h3>Vee-validate: ViaComponents</h3>
        <Form @submit="onSubmit" v-slot="{ values, errors }" :initial-values="formValues">
            <div>
                <label>Name</label>
                <Field 
                    name="name" 
                    type="text" 
                    placeholder="Name without test" 
                    rules="required|noIncludeTest|"
                    :validateOnInput="true"
                />
                <ErrorMessage name="name" v-slot="{ message }">
                    <p class="error">{{`$t(${message})`}}</p>
                </ErrorMessage>
            </div>
            <div>
                <label>Código postal</label>
                <Field 
                    name="cp"
                    placeholder="Código postal"
                    rules="isCp"                  
                    :validateOnInput="true"
                    :validate-on-blur="false"
                />
                <ErrorMessage name="cp"/>
            </div>
            <div>
                <label>Password</label>
                <Field 
                    type="password"
                    name="password"
                    placeholder="Password"
                    :validateOnInput="true"
                    :rules="{
                        min: 8,
                        max:12,
                        required: true
                    }"
                />
                <ErrorMessage name="password"/>
            </div>

            
            <button>Submit</button>
            

          
            <div>
                <p>Values</p>
                <div class="jsonSquare">
                    
                    <vue-json-pretty :data="values" > </vue-json-pretty>
                </div>

                <p>Errors</p>
                <div class="jsonSquare">
                    
                    <vue-json-pretty :data="errors" > </vue-json-pretty>
                </div>
            </div>
        </Form>


        <h3>Vee-validate: ViaComponents with yup</h3>
        <Form @submit="onSubmit" v-slot="{ values, errors }" :validation-schema="viaComponentsValidationSchema" :initial-values="formValues">
            <div>
            <div>
                <label>Name</label>
                <Field 
                    name="name" 
                    type="text" 
                    placeholder="Name without test" 
                    :validateOnInput="true"
                    
                />
                <ErrorMessage name="name" v-slot="{ message }">
                    <p class="error">{{`$t(${message})`}}</p>
                </ErrorMessage>
            </div>
            <div>
                <label>Código postal</label>
                <Field 
                    name="cp"
                    placeholder="Código postal"   
                    :validateOnInput="true"
                    :validate-on-blur="false"
                />
                <ErrorMessage name="cp" v-slot="{ message }">
                    <p class="error">{{`$t(${message})`}}</p>
                </ErrorMessage>
            </div>
                <label>Password</label>
                <Field 
                    type="password"
                    name="password"
                    placeholder="Password"
                    :validateOnInput="true"
                />
                <ErrorMessage name="password" v-slot="{ message }">
                    <p class="error">{{`$t(${message})`}}</p>
                </ErrorMessage>
            </div>

            
            <button>Submit</button>
            


            <div>
                <p>Values</p>
                <div class="jsonSquare">
                    <vue-json-pretty :data="values" > </vue-json-pretty>
                </div>

                <p>Errors</p>
                <div class="jsonSquare">
                    <vue-json-pretty :data="errors" > </vue-json-pretty>
                </div>
            </div>
        </Form>
    </div>

</template>

<style lang="scss" scoped>
    .jsonSquare{
        border: 1px solid;
        padding: 10px;
    }
    .error{
        color: red;
    }
</style>