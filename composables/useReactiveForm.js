import { required, minLength, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core'
export default function useReactiveForm() {
const formElements = reactive([]);

  const formData = reactive({
    firstName: '',
      lastName: '',
      organizationName: '',
      email:'',
      event:false,
  });

  const isValid = computed(() => {
    return formData.firstName && formData.lastName;
  });

  const handleSubmit = () => {
    // v$.value.$validate();
    if (v$.value.$isValid) {
      console.error('Form is invalid');
      return;
    }
  }

  const rules = computed(()=>{
    return {
      firstName : {
        required :helpers.withMessage('First name is required', required), 
        minLength : minLength(4)
      },
      lastName : {
        required:helpers.withMessage('Last name is required', required), 
        minLength : minLength(4)
      },
      organizationName : {minLength : minLength(4)},
    }
  });

  const v$ = useVuelidate(rules, formData);

  const submitForm = () =>{
    v$.value.$validate();
    // if(!v$.value.$error){
    //   console.log('error :', v$.value.$error.withMessage);
    // }
    // nextStep();
  }
  
    return { formData, isValid, v$, handleSubmit }
}