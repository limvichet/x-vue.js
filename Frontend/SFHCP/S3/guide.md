# S3: Using Pinia with Vue 3

Pinia is a state management library for Vue.js that is designed to work seamlessly with Vue 3. It provides a simple and intuitive API for managing application state, making it easy to share data between components and manage complex application state.

In this tutorial, we will walk through the steps of setting up and using Pinia with Vue 3 in a Vue project.

## Step 1: Setting up the Project & Install Pinia
1. Open your terminal.
2. Navigate to the directory with existing the project.
   ```bash
   cd state-management
   ```
3. Install dependencies by running:
   ```bash
   npm install
   ```
4.  you need to install Pinia in your Vue project. You can do this via npm or yarn:

```bash
npm install pinia
```

## Step 2: Setup Pinia in your Vue App

Once Pinia is installed, you need to set it up in your Vue app. This involves creating a Pinia store and using it to manage your application state.

Create a new file called `pinia.js` in your project's `src` directory:

```javascript
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia
```

Next, import the Pinia instance into your main Vue app file (usually `main.js` or `App.vue`) and use it to provide Pinia to your entire Vue app:

```javascript
import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/pinia.js'
import '@/global.css'

createApp(App)
.use(pinia)
.mount('#app')

```

## Step 3: Define and Use Pinia Stores

Now that Pinia is set up in your Vue app, you can define and use Pinia stores to manage your application state.

Create a new file called `TaskStore.js` in your project's `src/stores` directory:

```javascript
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
        {id: 1, title: 'HTML is the standard markup language for Web pages', isFav: false},
        {id: 1, title: 'CSS is the language we use to style an HTML document.', isFav: false},
        {id: 1, title: 'JavaScript is the programming language of the Web', isFav: true},
        {id: 1, title: 'Vue is progressive JavaScript Framework. An approachable', isFav: true},
    ],
    name: 'My Tasks'
  }),
  getters: {
    favs() {
      return this.tasks.filter(x => x.isFav)
    }
  }
})
```

We have to ways of using Pinia store in our component, the first is to use 
simple option API with the help of helper. The second way is to use composition API with the help of setup function of `<script setup>`. Here, we try to use simple approach with option API. 
We can import `mapState` and `mapActions` from `pinia` and use in our component `computed` and `methods` property accordingly.

```html
<!-- App.js -->
<template>

  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>

  <main>
    <div class="task-list" v-if="filter == 'all'">
      <p>All tasks</p>
      <div v-for="(task, index) in taskStore.tasks" key="index">
        <div class="task">
          <h3>{{ task.title }} </h3>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import { useTaskStore } from '@/stores/TaskStore'

export default {
  setup(){
    const taskStore = useTaskStore()
    return {taskStore}
  }
};
</script>
```

## Step 3.1: Create Global Style

Create a new file called `global.css` in your project's `src/global.css` directory:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');

body {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}
body * {
  font-family: "Poppins";
}

/* header */
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  max-width: 60px;
  transform: rotate(-10deg);
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}

.task-list {
    max-width: 640px;
    margin: 20px auto;
}
.task {
    padding: 6px 20px;
    background: #fff;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0,0,0,.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filter {
  width: 640px;
  margin: 10px auto;
  text-align: right;
}
.filter button {
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: .8em;
}

.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}
form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
form button {
  background: gainsboro;
  border: 0;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}
form input {
  border: 0;
  padding: 10px;
  border-radius: 4px;
  color: antiquewhite;
  font-size: 1rem;
}

```

## 3.2 Update App.vue to fresh visual

```html
<template>
  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>
  
  <main>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">All Favs</button>
    </nav>

    <div class="task-list" v-if="filter == 'all'">
      <p>All tasks</p>
      <div v-for="(task, index) in taskStore.tasks" :key="index">
        <div class="task">
          <h3>{{ task.title }} </h3>
        </div>
      </div>
    </div>

    <div class="task-list" v-if="filter == 'favs'">
      <p>Fav tasks</p>
      <div v-for="(task, index) in taskStore.favs" :key="index">
        <div class="task">
          <h3>{{ task.title }} </h3>
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
```

## 4. Actions
 
Actions are the equivalent of methods in components. They can be defined with the actions property in defineStore() and they are perfect to define business logic

- Update a file `TaskStore.js` in your project's `src/stores` directory:

```js
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(x => {
        return x.id != id
      })
    },
    toggleFav(id){
      const task = this.tasks.find(x => x.id == id)
      task.isFav = !task.isFav
    }
  }
```

- Update a file `App.vue` in your project's `src/App.vue` directory:

```html
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
          <h3>{{ task.title }} </h3>
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
          <h3>{{ task.title }} </h3>
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

    return { taskStore, filter, newTask, handleSubmit }
  }
};
</script>
```