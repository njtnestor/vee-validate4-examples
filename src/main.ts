import * as vue from "vue";

import App from "./logic/components/App.vue";


import { defineRule } from 'vee-validate';
import AllRules from '@vee-validate/rules';


Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});

const vm = vue.createApp(App);


vm.mount( "#bootstrap" );
