<template>
    <div class="my-component">
        <p>This is my MyGlobalStyleComponent.</p>
    </div>
</template>

<script>
export default {
    name: 'MyScopedlStyleComponent',
};
</script>

<style scoped>
.my-component {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>