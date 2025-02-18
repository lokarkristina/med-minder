<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/elements/Header.vue'
import Footer from '@/components/elements/Footer.vue'
</script>

<template>
  <Header />

  <main class="py-20">
    <RouterView />
  </main>

  <Footer />
</template>
