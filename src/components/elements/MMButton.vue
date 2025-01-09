<script setup>
defineProps({
  type: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    :href="'#'"
    class="button"
    :class="type ? `button--${type}` : ''">
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
.button {
  background: var(--color-accent);

  &:hover {
    background: var(--color-primary);
  }
}
</style>
