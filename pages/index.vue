<template>
    <div class="p-10 min-h-screen flex flex-col items-center justify-center bg-pink-500">
        <!-- <section class="h-screen flex items-center justify-center">
            <h1 class="text-2xl md:text-6xl text-red-600 font-semibold">Digital <span class="text-slate-900">Year 2025</span></h1>
        </section> -->

        <div class="h-32 w-32 relative hidden">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="transform hover:scale-75 transition duration-300">
                <div class="h-32 w-32 bg-white opacity-100 rounded-lg shadow-2xl"></div>
            </div>
        </div>

        <div class="h-32 w-32 relative hidden">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="transform hover:scale-x-50 hover:scale-y-150 transition duration-300">
                <div class="h-32 w-32 bg-white opacity-100 rounded-lg shadow-2xl"></div>
            </div>
        </div>

        <div class="h-32 w-32 relative hidden">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="transform hover:rotate-45 transition duration-300">
                <div class="h-32 w-32 bg-white opacity-100 rounded-lg shadow-2xl"></div>
            </div>
        </div>

        <div class="h-32 w-32 relative hidden">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="transform origin-bottom-left hover:-rotate-45 transition duration-300">
                <div class="h-32 w-32 bg-white opacity-100 rounded-lg shadow-2xl"></div>
            </div>
        </div>

        <div class="h-32 w-32 relative hidden">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="transform hover:translate-x-1/2 transition duration-300">
                <div class="h-32 w-32 bg-white opacity-100 rounded-lg shadow-2xl"></div>
            </div>
        </div>

        <div class="h-32 w-32 relative hidden">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="transform hover:translate-x-1/2 hover:translate-y-1/2 transition duration-300">
                <div class="h-32 w-32 bg-white opacity-100 rounded-lg shadow-2xl"></div>
            </div>
        </div>

        <div class="hidden">
            <!-- <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div> -->
            <div :class="{'translate-y-full' : isActive}" class="transform transition duration-500">
                <div class="h-32 w-32 bg-white opacity-100 rounded-lg shadow-2xl"></div>
            </div>
        </div>

        <div :class="{'origin-bottom translate-y-1/2' : isActive}" class="transform transition duration-500">
            <div v-show="isActive" class="flex items-center justify-start gap-2 py-2 px-4 rounded-xl mb-4 bg-gray-100">
                <div class="w-full items-start flex flex-col-reverse">
                    <input
                    type="text"
                    name="organization"
                    id="organization"
                    placeholder="My Organization Name"
                    class="w-full pb-2 border-[#DDE3EC] border-b border-l-0 border-r-0 border-t-0 outline-none focus:outline-none bg-transparent font-semibold placeholder:text-[#536387] placeholder:font-normal focus:text-[#6A64F1]"
                    />
                    <label for="organization" class="text-[#07074D] capitalize font-semibold mb-1"> Organization name</label>
                </div>
            </div>
        </div>

        <button class="py-2 px-4 bg-blue-500 text-white m-2 rounded" @click="changeAnimation()">Click me</button>

    </div>
</template>

<script setup>
const isActive = ref(false);

const changeAnimation = () => {
    isActive.value = true;
    console.log('isActive value', isActive.value);
}
</script>