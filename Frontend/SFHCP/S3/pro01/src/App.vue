<template>

  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>
    <main v-for="(task, index) in taskStore.tasks" :key="index">
    <p>{{ task.id }} {{ task.title }} {{ task.isFav }}</p>
  </main>
 
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore'

export default {
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  }
};
</script>