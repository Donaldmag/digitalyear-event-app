<template>
    <div>
        <div class="flex md:items-center items-start md:justify-center justify-start h-screen md:bg-[#f8f8f8] bg-white md:py-0 py-4 md:bg-cover md:bg-no-repeat md:bg-[url('https://img.freepik.com/free-photo/3d-abstract-science-background-with-flowing-particles_1048-17731.jpg')]">
            <div class="mx-auto max-w-[420px] w-full bg-white rounded-xl p-6 md:shadow md:shadow-slate-100">
                
                <div class="">
                    <div @click="moveBack(1)" v-if="stepTwoVisible" class="inline-flex flex-wrap items-center justify-between gap-4 px-3 py-1 -ml-3 rounded-xl mb-4 cursor-pointer hover:bg-gray-100 w-24">
                        <span class="text-xl"><</span>
                        <span class="text-sm uppercase">Back</span>
                    </div>

                    <RegistrationFromHead />
                    <FormStepOne @next-step="setIndex(1)" v-if="stepOneVisible===true"/>
                    <FormStepTwo @next-step="setIndex(2)" v-if="stepTwoVisible===true"/>
                    <FormStepThree v-if="stepThreeVisible===true"/>

                </div> 
            </div>
        </div>

    </div>
</template>

<script setup>
const stepOneVisible = ref(true);
const stepTwoVisible = ref(false);
const stepThreeVisible = ref(false);

const setIndex = (type) =>{
    if(type === 1){
        stepOneVisible.value = false;
        stepTwoVisible.value = true;
        stepThreeVisible.value = false;
    }
    else if(type === 2){
        stepOneVisible.value = false;
        stepTwoVisible.value = false;
        stepThreeVisible.value = true;
    }
}

const moveBack = (type) =>{
    if(type === 1){
        stepOneVisible.value = true;
        stepTwoVisible.value = false;
        stepThreeVisible.value = false;
    }
}

</script>