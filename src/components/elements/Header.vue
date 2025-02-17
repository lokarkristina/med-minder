<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <img alt="MedsMinder logo" class="logo" src="@/assets/logo.png" width="200" />

    <RouterLink to="/" :class="[]"> Overview </RouterLink>

    <RouterLink to="/" :class="[]"> Add new medication </RouterLink>

    <RouterLink to="/" :class="[]"> About </RouterLink>

    <RouterLink to="/" :class="[]"> Documentation </RouterLink>

    <!-- user links -->
    <button>Account</button>
  </header>
</template>
