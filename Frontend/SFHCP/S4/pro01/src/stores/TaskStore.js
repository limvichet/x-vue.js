import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    name: "My tasks",
    loading: false
  }),
  getters: {
    favs() {
      return this.tasks.filter(x => x.isFav)
    }
  },
  actions: {
    async getTasks() {
      this.loading = true

      const res = await fetch("http://localhost:3000/tasks")
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    async addTask(task) {
      this.tasks.push(task)

      const res = await fetch("http://localhost:3000/tasks", {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
      })

      if(res.error){
        console.log(res.error)
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(x => {
        return x.id != id
      })
      
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: 'DELETE',
      })

      if(res.error){
        console.log(res.error)
      }
    },
    async toggleFav(id){
      const task = this.tasks.find(x => x.id == id)
      task.isFav = !task.isFav
      
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
})