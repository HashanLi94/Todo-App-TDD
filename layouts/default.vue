<script setup lang="ts"></script>
<template>
  <div class="parent h-screen bg-gray-400 flex flex-col text-center">
    <!-- Header -->
    <UiTopNav />

    <!-- Content -->
    <main class="bg-gray-200 flex-grow pb-10">
      <slot />
    </main>

    <!-- footer -->
    <UiFooter />
  </div>
</template>
<style scoped>
.main__section {
  flex-grow: 1;
}
</style>
