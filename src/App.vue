<script setup>
import { RouterView } from 'vue-router'
// components
import MMFooter from '@/components/layout/MMFooter.vue'
import MMHeader from '@/components/layout/MMHeader.vue'
</script>

<template>
  <!-- page header. -->
  <MMHeader />

  <!-- main content. -->
  <main>
    <RouterView />
  </main>

  <!-- page footer. -->
  <MMFooter />
</template>

<style scoped></style>
