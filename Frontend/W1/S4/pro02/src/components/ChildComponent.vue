<template>
    <h1>Hello!  {{ message }}</h1>
 </template>

 <script>
 export default {

   props: {
    message: {
            type: String,
            default: "from child-component"
        },
  }
  
 }
</script>