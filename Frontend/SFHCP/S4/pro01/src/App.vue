<template>
  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>
  
  <main>

    <div class="new-task-form">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Enter here ..."
          v-model="newTask"
        >
        <button>Add</button>
      </form>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">All Favs</button>
    </nav>

    <div class="task-list" v-if="filter == 'all'">
      <p>All tasks</p>
      <div v-for="(task, index) in taskStore.tasks" :key="index">
        <div class="task">
          <h4>{{ task.title }} </h4>
          <div class="icons">
            <span class="material-symbols-outlined" @click="taskStore.deleteTask(task.id)">delete</span>
            <span class="material-symbols-outlined" @click="taskStore.toggleFav(task.id)">favorite</span>
          </div>
        </div>
      </div>
    </div>

    <div class="task-list" v-if="filter == 'favs'">
      <p>Fav tasks</p>
      <div v-for="(task, index) in taskStore.favs" :key="index">
        <div class="task">
          <h4>{{ task.title }} </h4>
          <div class="icons">
            <span class="icon material-symbols-outlined" @click="taskStore.deleteTask(task.id)">delete</span>
            <span class="icon material-symbols-outlined" @click="taskStore.toggleFav(task.id)">favorite</span>
          </div>
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

    const newTask = ref('')
    const handleSubmit = () => {
      if(newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random()*10000)
        })
        newTask.value = ''
      }
    }

    // fetch tasks
    taskStore.getTasks()

    return { taskStore, filter, newTask, handleSubmit }
  }
};
</script>