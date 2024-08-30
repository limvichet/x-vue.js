<template>
    <div :style="dynamicStyles">
        <p>This is my MyDirectiveStyleComponent.</p>
    </div>
</template>

<script>
export default {
    name: 'MyDirectiveStyleComponent',
    data() {
    return {
      dynamicStyles: {
        color: 'blue',
        fontSize: '20px',
      },
    };
  },
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>