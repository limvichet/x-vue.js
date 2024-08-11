const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: [],
            completes: []
        };
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo)
            this.newTodo = ''
        },
        deleteTodo(index){
            this.todos.splice(index, 1)
        },
        completeTodo(index){
            var c = this.todos[index]
            this.completes.push(c)
            this.todos.splice(index, 1)
            console.log(this.completes)
        }
    },
});

app.mount('#app')