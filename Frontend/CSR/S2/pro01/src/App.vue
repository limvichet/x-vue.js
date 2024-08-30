<template>
  <header-component/>
  <main-content-component />
  <footer-component />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainContentComponent from './components/MainContentComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainContentComponent,
    FooterComponent
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
