<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/new">New Note</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
