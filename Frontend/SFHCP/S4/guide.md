# S4: Json server

When you are doing front-end development, you may think we usually want to do unit tests even though the backend is not yet ready. In such cases, the node.js library “JSON Server” comes in handy. In this article, we will explain how to use JSON Server.

## Step 1: Setting up the Project & Json server

1. Open your terminal.
2. Navigate to the directory with existing the project.
   ```bash
   cd state-management
   ```
3. Install dependencies by running:
   ```bash
   npm install
   ```
4. you need to install Json server in your Vue project. You can do this via npm or yarn:

```bash
npm install -g json-server
```

## Step 2: Create json file in your Vue App

Once Json server is installed, you need to set it up in your Vue app. This involves creating a `db.json` store and using it to manage your application state.

Create a new file called `db.json` in your project's `data/db.json` directory:

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "HTML is the standard markup language for Web pages",
      "isFav": false
    },
    {
      "id": 2,
      "title": "CSS is the language we use to style an HTML document.",
      "isFav": false
    },
    {
      "id": 3,
      "title": "JavaScript is the programming language of the Web",
      "isFav": true
    },
    {
      "id": 4,
      "title": "Vue is progressive JavaScript Framework. An approachable",
      "isFav": true
    },
    {
      "id": 5,
      "title": "Vue is progressive JavaScript Framework. An approachable",
      "isFav": true
    }
  ]
}
```

## Step 3: Run json server

```bash
json-server -w ./src/data/db.json
```

## Step 4: Add actions getTasks()

```bash
  actions: {
    async getTasks() {
      this.loading = true

      
      const res = await fetch("http://localhost:3000/tasks")
      const data = await res.json()

      this.tasks = data
      this.loading = false
    }
}
```

## Step 5: Add code to App.vue

```bash
<script>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/TaskStore'

export default {
  setup() {

    const taskStore = useTaskStore()

    // fetch tasks
    taskStore.getTasks()

    const filter = ref('all')
    return { taskStore, filter }
  }
};
</script>
```
## Step 5: Add actions addTask(task)

```bash
  actions: {
    async addTask(task) {
      this.tasks.push(task)

      // Post method
      const res = await fetch("http://localhost:3000/tasks", {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
      })

      if(res.error){
        console.log(res.error)
      }
    }
}
```

## Step 6: Add actions deleteTask(id)

```bash
  actions: {
    async deleteTask(id) {
      this.tasks = this.tasks.filter(x => {
        return x.id != id
      })
      
      // DELETE method
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: 'DELETE',
      })

      if(res.error){
        console.log(res.error)
      }
    }
}
```

## Step 7: Add actions toggleFav(id)

```bash
  actions: {
    async toggleFav(id){
      const task = this.tasks.find(x => x.id == id)
      task.isFav = !task.isFav
      
      // PATH method
      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: task.isFav }),
        headers: {'Content-Type': 'application/json'}
      })

      if(res.error){
        console.log(res.error)
      }
    }
}
```