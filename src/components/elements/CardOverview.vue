<script setup lang="ts">
import { defineProps } from 'vue'
import { medicine } from '@/utils/database'
import { stash } from '@/utils/stash'

interface CardData {
  title: string
  info?: string
}

const props = defineProps<{
  data: CardData
  untilNextApp: number
  daysInMonth: number
}>()

const medsToCheckup = (amount: number): number => {
  return props.untilNextApp * amount
}

const needsRefill = (id: string, amount: number): boolean => {
  const medStash = stash.find((s) => s.id === id) || { amount: 0 }
  return medsToCheckup(amount) > medStash.amount ? 'yess' : 'not yet'
}
</script>

<template>
  <div class="relative shadow-sm card aspect-square isolate">
    <div class="card-body grid grid-rows-[1fr_auto] gap-y-5 p-5">
      <!-- the active meds info -->
      <div
        class="grid items-start content-center grid-cols-2 px-6 py-5 text-center rounded-sm bg-neutral gap-y-2 gap-x-6"
      >
        <template v-for="med in medicine" :key="med.id">
          <div
            v-if="med.active && med.scheduled"
            :class="[
              needsRefill(med.id, med.amountPerDay) ? 'bg-error' : 'bg-success',
            ]"
            class="grid content-center px-4 py-3 border rounded-sm aspect-square"
          >
            <span class="font-mono text-2xl">
              {{ med.title }}
            </span>
            <div>
              <span class="text-xs"> @ home </span>
              <code>
                {{ stash.find((s) => s.id === med.id)?.amount }}
              </code>
            </div>
            <div class="pt-1 mt-1 border-t border-secondary/20">
              <span class="text-xs"> need refill? <br /> </span>
              <code>
                {{ `${needsRefill(med.id, med.amountPerDay)}`.toUpperCase() }}
              </code>
            </div>
          </div>
        </template>
      </div>

      <!-- card info -->
      <div class="self-end text-center card-content">
        <h2 class="inline-flex lowercase card-title text-7xl">
          {{ props.data.title }}
        </h2>
        <p v-if="props.data.info" class="card-info">
          {{ props.data.info }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --_primary: var(--color-rose);
  --_accent: var(--color-secondary);

  grid-column: span 2;
  grid-row: span 2;
}
</style>
