<template>
  <img alt="Vue logo" src="./assets/laravel.png">
  <!-- <HelloWorld msg="Write code for the joy of it."/> -->
  <my-global-style-component/>
  <my-scopedl-style-component />
  <my-directive-style-component />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyGlobalStyleComponent from './components/MyGlobalStyleComponent.vue'
import MyScopedlStyleComponent from './components/MyScopedlStyleComponent.vue'
import MyDirectiveStyleComponent from './components/MyDirectiveStyleComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    MyGlobalStyleComponent,
    MyScopedlStyleComponent,
    MyDirectiveStyleComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
