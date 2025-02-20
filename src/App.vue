<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <Header />

  <main class="container max-w-5xl md:max-w-4xl mx-auto py-15">
    <RouterView />
  </main>

  <Footer />
</template>

<style>
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100svh;
  background: var(--color-neutral);
}
</style>
