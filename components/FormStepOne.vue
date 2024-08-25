<template>
  <div>
      <form @submit.prevent="submit">
          <div class="flex items-center justify-start gap-2 py-2 px-4 rounded-xl mb-4 bg-gray-100">
            <div class="w-full items-start flex flex-col-reverse">
                <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Jane"
                class="w-full pb-2 border-[#DDE3EC] border-b border-l-0 border-r-0 border-t-0 outline-none focus:outline-none bg-transparent font-semibold placeholder:text-[#536387] placeholder:font-normal focus:text-[#6A64F1]"
                />
                <label for="firstname" class="text-[#07074D] capitalize font-semibold mb-1"> First name </label>
            </div>
          </div>

          <div class="flex items-center justify-start gap-2 py-2 px-4 rounded-xl mb-8 bg-gray-100">
            <div class="w-full items-start flex flex-col-reverse">
                <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Antoine"
                class="w-full pb-2 border-[#DDE3EC] border-b border-l-0 border-r-0 border-t-0 outline-none focus:outline-none bg-transparent font-semibold placeholder:text-[#536387] placeholder:font-normal focus:text-[#6A64F1]"
                />
                <label for="lastname" class="text-[#07074D] capitalize font-semibold mb-1"> Last name </label>
            </div>
          </div>

          <div class="flex items-start justify-start gap-2">
            <input type="checkbox" name="hidenNames" class="" v-model="isChecked">
            <label for="hidenNames" class="text-sm w-full max-w-96 mx-auto py-4 text-slate-600 -mt-5 mb-8">I Want to show my support but not my name. <br><strong>NB: </strong>Your name will not be displayed as a signatory on the public page.</label>
          </div>

          <div :class="isChecked ? 'origin-bottom translate-y-4 mb-8' : 'delay-700 -translate-y-4'" class="transform transition duration-500 delay-0 -mt-8">
            <div v-show="isChecked" class="flex items-center justify-start gap-2 py-2 px-4 rounded-xl bg-gray-100">
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
      </form>
  </div>
</template>

<script setup>
const isChecked = ref(false);
</script>