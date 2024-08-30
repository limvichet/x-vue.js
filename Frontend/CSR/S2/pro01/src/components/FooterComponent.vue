<!-- src/components/Header.vue -->
<template>
    <footer>
        <nav>
            <ul>
                <li><a href="#">Contat</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#">blog</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="#">Contat</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#">blog</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="#">Contat</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#">blog</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="#">Contat</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#">blog</a></li>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
};
</script>

<style scoped>
footer {
    background-color: #333;
    color: white;
    padding: 0 300px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;

}

nav{
    width: auto;
    align-content: center;
    justify-content: center;
}

nav ul li {
    padding: 10px 5px;
    /* text-align: left; */
    list-style-type: none;
}

a {
    text-decoration: none;
    color: white;
}
</style>