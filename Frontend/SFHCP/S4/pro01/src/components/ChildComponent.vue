<!-- ChildComponent.vue -->
<template>
    <button @click="sendMessage">Click Me</button>
</template>

<script>
export default {
    name: 'ChildComponent',
    methods: {
        sendMessage() {
            this.$emit('custom-event', 'Hello from Child');
        }
    }
};
</script>

<style scoped>
button {
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>