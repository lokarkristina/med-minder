<script setup lang="ts">
import { defineProps } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  data: Object,
})
</script>

<template>
  <div class="card card-border aspect-square relative isolate">
    <div class="card-body grid items-end p-5">
      <div class="card-content text-center">
        <h2 class="card-title inline-flex text-7xl lowercase">
          {{ props.data?.title }}
        </h2>
        <p class="card-info">
          {{ props.data?.info }}
        </p>

        <!-- default slot -->
        <slot></slot>
      </div>
      <div class="card-actions absolute top-5 right-5">
        <button class="aspect-square p-1 rounded-full">
          <PlusIcon class="w-5 aspect-square" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --_primary: var(--color-rose);
  --_accent: var(--color-cosmiclatte);

  grid-column: span 2;
  grid-row: span 2;
}
</style>
