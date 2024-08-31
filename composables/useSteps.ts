import { ref } from "vue";
export default function useSteps(){
    const step = ref(0);

    const nextStep = () => {
        if(step.value >= 0 && step.value <3){
            step.value++;
            console.log('step value', step.value);
        }
    }
    const prevStep = () => {
        if(step.value >0 && step.value <2){
            step.value--;
            console.log('step value', step.value);
        }
    }

    const validateStep = () =>{
       
    }

    return {step, nextStep, prevStep, validateStep}
}