<template>
  <div>
    <h1 class="w-full text-center text-[#07074D] font-semibold mb-4"> Do you want to create an event with us? </h1>

    <div class="flex items-ceenter justify-between gap-4">
      <div @click="openNextStep(whatsapp)" class="w-1/3 flex items-center justify-start gap-4 p-4 border-gray-200 border-2 rounded-xl mb-2 cursor-pointer hover:bg-green-500 hover:text-white transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
          <path fill="currentColor"
            d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37a.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681z" />
        </svg>
        <span class="capitalize font-semibold"> Yes</span>
      </div>

      <div @click="openNextStep(endform)" class="w-1/3 flex items-center justify-start gap-4 p-4 border-gray-200 border-2 rounded-xl mb-2 cursor-pointer hover:bg-red-500 hover:text-white transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
          <path fill="currentColor" fill-opacity=".89" fill-rule="evenodd"
            d="M15.807.939c.396.367.655 1.133.706 1.595c.59.366 1.288 1.104 1.349 2.494c1.053.731 1.853 2.083.854 4.06c.58.54 1.227 2.188.395 3.516c-.969 1.552-3.075 1.66-5.174 1.383c.56 1.565.77 3.009-.116 4.488C12.94 19.787 11.724 20 11.308 20c-1.138 0-1.918-.979-2.234-2.283c-.115-.364-.246-1.224-.297-1.45q-.398-2.16-2.67-3.453a11.4 11.4 0 0 0-2.123-.946h-2.34c-.521 0-1.144-.527-1.144-1.165V3.067q.111-1.083 1.202-1.082h3.11Q6.857 1.52 8.89.99C10.2.637 10.487.52 11.403.268c2.053-.532 3.478-.24 4.404.67m-2.382.424c-.819 0-1.856.252-2.316.399c-.162.051-.446.135-.745.221l-.3.087l-.288.082l-.56.158s-1.41.378-4.173 1.02q-.154.018-.166.022v7.38q2.267.873 3.53 2.118c1.264 1.244 1.615 2.368 1.822 3.807c.118.723.309 1.306.597 1.705a.65.65 0 0 0 .342.251c.147.047.35.05.783-.184c.433-.236.99-.853 1.095-1.772c.07-.893-.17-1.667-.492-2.481a16 16 0 0 0-.357-.822c-.218-.413.11-1.099.786-.95c.906.255 3.154.6 4.422 0q1.106-.64.547-2.066a1.7 1.7 0 0 0-.495-.553c-.17-.102-.502-.544-.103-1.045c.396-.635.975-1.928-.49-2.734a.66.66 0 0 1-.34-.57c-.02-.274.024-1.29-.73-1.744c-.18-.097-.397-.177-.52-.41c-.078-.154-.103-.528-.103-.528c-.103-.632-.245-1.222-1.746-1.391M3.519 3.348H1.861v7.157h1.658z" />
        </svg>
        <span class="capitalize font-semibold"> No</span>
      </div>
      <!-- <input type="checkbox" name="eventStatus" id="eventStatus" v-model="eventStatusValue" > -->
    </div>
  </div>
</template>

<script setup>
const eventStatusValue = ref(false);
const props = defineProps({
  dataToSubmit: { type: Object, required: true },
});
const emit = defineEmits('submit-form');

const whatsappPhoneNumber = ref('237691360228');

const initiateSubmition = () => {
  props.dataToSubmit.event = eventStatusValue.value;
  emit('submit-form');
  // console.log('formToSub', props.dataToSubmit);
}

// const openWhatsapp = () => {
//   eventStatusValue.value = true;
//   initiateSubmition();
//   let whatsappNumber = whatsappPhoneNumber.value.replace(/\D/g, '');
//   window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
// }

// const endformSubmit = () =>{
//   eventStatusValue.value = false;
//   initiateSubmition();
//   navigateTo('/thank-you');
// }

const openNextStep = (step) => {
  if (!step==="whatsapp") {
    navigateTo('/thank-you');
  } else {
    eventStatusValue.value = true;
    let whatsappNumber = whatsappPhoneNumber.value.replace(/\D/g, '');
    window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
  }
  initiateSubmition();
}

</script>