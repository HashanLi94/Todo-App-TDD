<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100">
    <section class="text-center pt-7">
      <h1 class="text-3xl text-gray-800 uppercase">What are doing today???</h1>
    </section>
    <section
      class="w-9/12 max-w-lg mx-auto flex flex-row flex-wrap items-center justify-between bg-white p-7 mt-5"
    >
      <input type="text" placeholder="Type a todo" class="px-4 py-2 border border-blue focus:outline-blue-300 rounded-md" />
      <button
        class="uppercase px-4 py-2 border border-blue rounded-md hover:bg-blue-950 hover:text-white transition-all duration-200"
      >
        Add
      </button>
    </section>
  </div>
</template>
