<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'

</script>

<template>
  <nav class="navbar d-flex rounded-pill fs-5 fw-bold" id="navbar">
    <RouterLink to="/" class="nav-link">My Notes</RouterLink>
    <RouterLink to="/new" class="nav-link">New Note</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
#navbar {
  justify-content: space-around;
  background-color: var(--navbar-background);
}
</style>
