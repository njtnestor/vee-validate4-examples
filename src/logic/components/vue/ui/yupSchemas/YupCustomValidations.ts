import * as Yup from 'yup';

export default class CustomYupValidations {

  static noIncludeTest(this: Yup.StringSchema, message){
    return this.test({
        name: 'noIncludeTest',
        exclusive: true,
        message,
        test(value){
            if(value){
                return !value.includes('test')
            }
            return true
        }
    })
  }

  static cp(this: Yup.StringSchema, message){
    return this.test({
        name: 'cp',
        exclusive: true,
        message,
        test(value){
            if(value){
                var reg = new RegExp('^[0-9]+$');
                return (value.length === 5 && reg.test(value)) 
            }
            return true
            
        }
    })
  }

}
