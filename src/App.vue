<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
            <div class="navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/wallet">Wallet</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    <div>
        <Home></Home>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

};
</script>

<style scoped>

</style>
