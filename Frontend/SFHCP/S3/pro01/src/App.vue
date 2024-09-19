<template>

  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>


  <main>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">All Favs</button>
    </nav>

    <!-- all task -->
    <div class="task-list" v-if="filter == 'all'">
      <p>All task</p>
      <div v-for="(task, index) in taskStore.tasks" :key="index">
        <div class="task">
          {{ task.title }} <small><b>{{ task.isFav }} </b></small>
        </div>
      </div>
    </div>

    <!-- all fav -->
    <div class="task-list" v-if="filter == 'favs'">
      <p>All favs</p>
      <div v-for="(task, index) in taskStore.favs" :key="index">
        <div class="task">
          {{ task.title }} <small><b>{{ task.isFav }} </b></small>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/TaskStore'

export default {
  setup() {
    const taskStore = useTaskStore()
    const filter = ref('all')
    return { taskStore, filter }
  }
};
</script>