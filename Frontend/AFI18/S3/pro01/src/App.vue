<template>
  <img alt="Vue logo" src="./assets/laravel.png">
  <HelloWorld msg="Write code for the joy of it."/>
  <p>{{ $t('welcome') }}</p>
  <p>{{ $t('message') }}</p>
  <button @click="changeLocale('en')">English</button>
  <button @click="changeLocale('fr')">Français</button>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
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
