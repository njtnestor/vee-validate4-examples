import * as Yup from 'yup';
import CustomYupValidations from './YupCustomValidations';

Yup.addMethod<Yup.StringSchema>(Yup.string, 'noIncludeTest', CustomYupValidations.noIncludeTest);
Yup.addMethod<Yup.StringSchema>(Yup.string, 'cp', CustomYupValidations.cp);

Yup.StringSchema

const name = Yup
    .string()
    .noIncludeTest('asdasdasdada')
    .min(6, 'validations.min')

const cp = Yup
    .string()
    .cp('validations.invalidCp')
    .required('validations.required')
    
const password = Yup
    .string()
    .min(8, 'validations.min')
    .max(12, 'validations.max')
    .required('validations.required')

export const formSchema = Yup.object().shape({
  name,
  cp,
  password
})
