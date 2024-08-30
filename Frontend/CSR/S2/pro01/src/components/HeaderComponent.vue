<!-- src/components/Header.vue -->
<template>
    <header>
        <h1>My Website Header</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
};
</script>

<style scoped>
header {
    background-color: #333;
    color: white;
    padding: 10px;
}

nav ul li {
    display: inline;
    padding: 10px 5px;
}

a {
    text-decoration: none;
    color: white;
}
</style>