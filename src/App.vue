<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <Header />

  <main class="container max-w-5xl mx-auto md:max-w-4xl py-15">
    <RouterView />
  </main>

  <Footer />
</template>

<style>
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100svh;
  background: #F6D4BA;
}
</style>
