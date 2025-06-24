<template>
  <div>
    <form @submit.prevent="submit">

      <div class="flex items-center justify-start gap-4 p-4 border-gray-200 border-2 rounded-xl mb-2 cursor-pointer hover:bg-gray-100 transition opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.27" height="32" viewBox="0 0 256 262">
          <path fill="#4285F4"
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
          <path fill="#34A853"
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
          <path fill="#FBBC05"
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
          <path fill="#EB4335"
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
        </svg>
        <span class="text-[#07074D] capitalize font-semibold"> Signup with google</span>
      </div>

      <div class="w-full text-center text-[#07074D] capitalize font-semibold mb-1"> OR </div>

      <div class="mb-8">
        <div class="flex items-center justify-start gap-2 px-4 py-2 rounded-xl bg-gray-100 mb-1">
          <div class="w-full items-start flex flex-col-reverse">
            <input 
              type="email" 
              name="email" 
              id="email" 
              v-model="formData.email"
              @change="v$.email.$touch"
              placeholder="my-email@example.com"
              class="w-full pb-2 border-[#DDE3EC] border-b border-l-0 border-r-0 border-t-0 outline-none focus:outline-none bg-transparent font-semibold placeholder:text-[#536387] placeholder:font-normal focus:text-[#6A64F1]" />
            <label for="lastname" class="text-[#07074D] capitalize font-semibold mb-1"> Your email </label>
          </div>
        </div>
        <div v-if="v$.email.$error" class="text-sm px-2 text-red-500">Please enter a valid Email</div> 
      </div>
      <button @click="submitForm" type="submit" class="w-full h-14 px-4 bg-green-600 text-white font-medium rounded-xl flex items-center justify-between hover:opacity-80 transition uppercase">
          <span> &nbsp; </span>
          <span>Next</span>
          <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0M8.749 5.646a.682.682 0 1 0-.977.951l3.402 3.491l-3.397 3.42a.682.682 0 1 0 .967.96l3.87-3.894a.68.68 0 0 0 .005-.957Z"/></svg>
          </span>
      </button>
    </form>
  </div>
</template>

<script setup>
import useReactiveForm from '../composables/useReactiveForm';
import axios from 'axios';

const { formData, v$ } = useReactiveForm();
const config = useRuntimeConfig();

const props = defineProps({
  dataToSubmit: { type: Object, required: true },
});
const emit = defineEmits('next-step');

const url = `${config.public.baseURL}/check-email`;

async function submitForm(){
  try{
    const response = await axios.post(url, {email: formData.email});
   // Check for successful response (status code 200)
   if (response.status === 200) { 
      props.dataToSubmit.email = formData.email;
      emit('next-step');
    } else {
      console.error('Unexpected response status:', response.status);
      // Handle unexpected responses
    }

  } catch (error) {
    if (error.response && error.response.status === 409){
      alert(error.response.data.error);
    }
  }
}
</script>