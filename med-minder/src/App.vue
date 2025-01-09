<script setup>
import { RouterView } from 'vue-router'
// components
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <header>
    <img src="@/assets/logo.png" alt="MedMinder logo" class="logo">

    Medminder - Your medication supply guide.

    <nav class="main-menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <AppFooter />

</template>

<style scoped>
.logo {
  max-width: 60px;
}
</style>
