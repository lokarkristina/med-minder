<script setup></script>

<template>
  <header>
    <img
      src="@/assets/logo.png"
      alt="MedMinder logo"
      class="logo" />

    <p>Medminder - Your medication supply guide.</p>

    <nav class="main-menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.logo {
  max-width: 60px;
}
</style>
