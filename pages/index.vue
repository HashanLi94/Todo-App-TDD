<script setup lang="ts">
import { useTodoStore } from "~~/store/index";
// import { IPageMetaData } from "~~/models/index";

// definePageMeta({
//   layout: "default",
// });

const todoStore = useTodoStore();
const route = useRoute();

const newTodo = ref("");

const error = ref(false);

watch(error, (value: boolean) => {
  if (value) {
    setTimeout(() => {
      error.value = false;
    }, 3000);
  }
});

const addNewTodo = () => {
  if (newTodo.value.length <= 0) {
    error.value = true;
    return;
  }

  console.log(error.value);

  todoStore.addTodo({ title: newTodo.value });

  newTodo.value = "";

  console.log(todoStore.items);
};
</script>

<template>
  <div class="app__main-section">
    <div class="text-center pt-7">
      <h1 class="text-3xl text-gray-800 uppercase">What are doing today???</h1>
    </div>
    <div
      class="w-10/12 max-w-lg h-24 mx-auto bg-white px-7 py-5 mt-10 rounded-md shadow"
    >
      <TodoInput v-model="newTodo" @save="addNewTodo" :errorState="error" />

    </div>
  </div>
</template>
