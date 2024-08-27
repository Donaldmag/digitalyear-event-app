import { ref } from "vue";
export default function useSteps(){
    // const steps = ref([
    //     {
    //         name:'step 1',
    //         completed:false,
    //         data:{}
    //     },
    //     {
    //         name:'step 2',
    //         completed:false,
    //         data:{}
    //     }
    // ])
    const step = ref(0);

    const nextStep = () => {
        // if(steps.value[step.value].completed === true){
            if(step.value >= 0 && step.value <3){
                step.value++;
                console.log('step value', step.value);
            }
        // }
    }
    const prevStep = () => {
        if(step.value >0 && step.value <2){
            step.value--;
            console.log('step value', step.value);
        }
    }

    const validateStep = () =>{
        // steps.value[step.value].completed = true;
        // nextStep();
    }

    return {step, nextStep, prevStep, validateStep}
}