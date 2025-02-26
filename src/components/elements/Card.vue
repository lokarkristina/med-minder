<script setup lang="ts">
import { defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    type: string
    title: string
    contentClasses?: string[]
    info?: string
  }>(),
  {
    contentClasses: () => [],
  },
)

const cardClasses = [
  'card shadow-sm aspect-square relative isolate',
  `card--${props.type}`,
]
</script>

<template>
  <div :id="props.type" :class="cardClasses">
    <div class="card-body grid p-3">
      <div :class="contentClasses" class="grid card-content text-center">
        <h2 class="card-title inline-flex justify-center text-3xl lowercase">
          {{ props.title }}
        </h2>
        <p v-if="props.info" class="card-info">
          {{ props.info }}
        </p>

        <!-- card specific content -->
        <slot></slot>
      </div>

      <!-- @todo maybe add this on hover somehow -->
      <!-- don't like the way it sits on the corder if there's a lot of content in the card -->
      <!-- <div class="card-actions absolute top-5 right-5">
        <button class="aspect-square p-1 rounded-full">
          <PlusIcon class="w-5 aspect-square" />
        </button>
      </div> -->
    </div>
  </div>
</template>

<style>
.card-title {
  font-family: var(--font-serif);
}

.card {
  border-color: var(--_accent);
  background: var(--_primary);
  color: var(--_accent);

  & button {
    color: var(--_primary);
    background: var(--_accent);
  }

  &:nth-child(2) {
    --_primary: var(--color-aliceblue);
    --_accent: var(--color-lilac);
  }
  &:nth-child(3) {
    --_primary: var(--color-lilac);
    --_accent: var(--color-cosmiclatte);
  }
  &:nth-child(4) {
    --_primary: var(--color-persimmon);
    --_accent: var(--color-aliceblue);
  }
  &:nth-child(5) {
    --_primary: var(--color-dutchwhite);
    --_accent: var(--color-persimmon);
  }
}
</style>
