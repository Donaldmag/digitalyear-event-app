import { required, email, minLength, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
export default function useReactiveForm() {

  const formData = reactive({
    firstName: '',
      lastName: '',
      organizationName: '',
      email:'',
      event:false,
  });

  const rules = computed(()=>{
    return {
     email: {
        email: helpers.withMessage('Invalid email format', email),
      },
      firstName : {
        required :helpers.withMessage('First name is required', required), 
        minLength : minLength(4)
      },
      lastName : {
        required:helpers.withMessage('Last name is required', required), 
        minLength : minLength(4)
      },
      organizationName : {minLength : minLength(2)},
      // email: {
      //   required: helpers.withMessage('Email is required', required),
      //   email: helpers.withMessage('Invalid email format', email),
      // },
    }
  });

  const v$ = useVuelidate(rules, formData);
  
    return { formData, v$ }
}