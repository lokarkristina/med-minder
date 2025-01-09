<script setup>
import MMButton from '../elements/MMButton.vue';
</script>

<template>
  <footer>
    <p>© Created by Kristina Lokar</p>
    <p>{{ new Date().getFullYear() }}</p>
    <div class="socials">
      <a href="https://www.linkedin.com/in/lokar-kristina"> LinkedIn </a>
      <a href="https://github.com/lokarkristina"> GitHub </a>
    </div>
    <div class="additional">
      <MMButton
        type="danger"
        text="Delete all data" />
    </div>
  </footer>
</template>
