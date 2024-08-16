<template>
  <div>
    <div class="flex items-center md:justify-center justify-start md:h-screen md:bg-[#f8f8f8] bg-white md:py-0 py-4">
      <div class="mx-auto max-w-[420px] w-full bg-white rounded p-6 md:shadow md:shadow-slate-100">
        
        <h1 class="text-xl text-red-600 font-extrabold">Digital <span class="text-slate-700">Year 2025</span></h1>
        <p class="text-sm w-full max-w-96 mx-auto py-4 text-slate-600">By signing the open letter, you can help ensure that digital innovation in Cameroon is quality, ethical, and inclusive, driving sustainable development for all.
        </p>

        <hr class="mb-5">

        <form>
          

          <div class="flex items-center justify-start gap-2 py-2 px-4 rounded-xl mb-4 bg-gray-100">
            <div class="w-full items-start flex flex-col-reverse">
                <input
                type="email"
                name="myemail@example.com"
                id="myemail@example.com"
                placeholder="Antoine"
                class="w-full pb-2 border-[#DDE3EC] border-b border-l-0 border-r-0 border-t-0 outline-none focus:outline-none bg-transparent font-semibold placeholder:text-[#536387] placeholder:font-normal focus:text-[#6A64F1]"
                />
                <label for="lastname" class="text-[#07074D] capitalize font-semibold mb-0.5"> Your email </label>
            </div>
          </div>

          <span class="text-sm max-w-96 mx-auto py-4 text-slate-600"> ou </span>

          <div class="flex items-center justify-between"></div>


        </form>



        <button type="submit" class="w-full h-12 px-4 bg-green-600 text-white font-medium rounded-xl flex items-center justify-between hover:opacity-80 transition">
          <span> &nbsp; </span>
          <span class="uppercase">Suivant</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0M8.749 5.646a.682.682 0 1 0-.977.951l3.402 3.491l-3.397 3.42a.682.682 0 1 0 .967.96l3.87-3.894a.68.68 0 0 0 .005-.957Z"/></svg>
          </span>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup></script>