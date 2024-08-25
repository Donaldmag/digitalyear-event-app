<template>
    <div>
        <div class="flex md:items-center items-start md:justify-center justify-start h-screen md:bg-[#f8f8f8] bg-white md:py-0 py-4 md:bg-cover md:bg-no-repeat md:bg-[url('https://img.freepik.com/free-photo/3d-abstract-science-background-with-flowing-particles_1048-17731.jpg')]">
            <div class="mx-auto max-w-[420px] w-full bg-white rounded-xl p-6 md:shadow md:shadow-slate-100">

                <ThankYou class="hidden"/>
                <div class="">
                    <div @click="prevStep" v-if="step===1" class="inline-flex flex-wrap items-center justify-between gap-4 px-3 py-1 -ml-3 rounded-xl mb-4 cursor-pointer hover:bg-gray-100 w-24">
                        <span class="text-xl"><</span>
                        <span class="text-sm uppercase">Back</span>
                    </div>

                    <RegistrationFromHead />
                    <component :is="steps[step]"/>
                    <button v-if="step!==2" @click="nextStep" type="submit" class="w-full h-14 px-4 bg-green-600 text-white font-medium rounded-xl flex items-center justify-between hover:opacity-80 transition uppercase">
                        <span> &nbsp; </span>
                        <template v-if="step===1">Validate</template>
                        <template v-else>Next</template>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0M8.749 5.646a.682.682 0 1 0-.977.951l3.402 3.491l-3.397 3.42a.682.682 0 1 0 .967.96l3.87-3.894a.68.68 0 0 0 .005-.957Z"/></svg>
                        </span>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import FormStepOne from '~/components/FormStepOne.vue';
import FormStepThree from '~/components/FormStepThree.vue';
import FormStepTwo from '~/components/FormStepTwo.vue';
import useSteps from '../composables/useSteps';
import ThankYou from '~/components/ThankYou.vue';

const {step, nextStep, prevStep} = useSteps();
const steps = [
    FormStepOne,
    FormStepTwo,
    FormStepThree,
    ThankYou
];
</script>