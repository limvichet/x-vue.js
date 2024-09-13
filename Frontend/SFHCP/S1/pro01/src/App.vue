<template>
  <img alt="Vue logo" src="./assets/256px-Pinialogo.png">

  <Card>

    <CardNamedSlot>
      <template v-slot:header>
        <h1>Header Content</h1>
      </template>
    </CardNamedSlot>

    <h1>Title</h1>
    <p>Main content goes here.</p>
    <p>This is some content inside the card.</p>

    <CardNamedSlot>
      <template v-slot:footer>
        <p>Footer Content</p>
      </template>
    </CardNamedSlot>
  </Card>

</template>

<script>
import Card from './components/Card.vue'
import CardNamedSlot from './components/CardNamedSlot.vue'

export default {
  name: 'App',
  components: {
    Card,
    CardNamedSlot
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
