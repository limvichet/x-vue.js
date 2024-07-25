
const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: ['Super Computer', 'Super Lenovo', 'Super Mac Pro'],
            completes: []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push(this.newTodo)
                this.newTodo = ''
            }
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