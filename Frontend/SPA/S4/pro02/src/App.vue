<template>
  <img alt="Vue logo" src="./assets/laravel.png">
  <ChildComponent message="Write code for the joy of it."/>
  <ChildComponent :message="parentMessage"/>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'App',
  components: {
    ChildComponent
  },
  data(){
    return {
      parentMessage: "Messge from parent-component"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
