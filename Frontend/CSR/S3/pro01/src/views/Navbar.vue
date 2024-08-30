<template>
    <div>
        <router-link to="/">Home</router-link> &nbsp; | &nbsp;
        <router-link to="/about">About</router-link> &nbsp; | &nbsp;
        <router-link :to="`/User/${id}`">User</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return{
                id: 333
            }
        }
    }
</script>