<template>
    <div>
      <h1>User Details</h1>
      <p>User ID: {{ $route.params.id }}</p>

      <router-link :to="`/user/${$route.params.id}/setting`">Setting</router-link>
      <router-view />
    </div>
  </template>

<script>

export default {
    name: 'User',    
}
</script>