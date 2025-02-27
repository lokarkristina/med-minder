<script setup lang="ts">
import { defineProps } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
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
  <div class="card shadow-sm aspect-square relative isolate">
    <div class="card-body grid grid-rows-[1fr_auto] gap-y-5 p-5">
      <!-- the active meds info -->
      <div
        class="grid grid-cols-2 items-start content-center bg-neutral rounded-sm text-center gap-y-2 gap-x-6 py-5 px-6"
      >
        <template v-for="med in medicine" :key="med.id">
          <div
            v-if="med.active && med.scheduled"
            :class="[
              needsRefill(med.id, med.amountPerDay) ? 'bg-error' : 'bg-success',
            ]"
            class="aspect-square grid content-center border py-3 px-4 rounded-sm"
          >
            <span class="font-mono text-2xl">
              {{ med.title }}
            </span>

            <!-- <div>
               until next appoitment you need: <br />
               {{ medsToCheckup(med.amountPerDay) }}
              </div> -->
            <div>
              <span class="text-xs"> @ home </span>
              <code>
                {{ stash.find((s) => s.id === med.id)?.amount }}
              </code>
            </div>
            <div class="border-t border-secondary/20 mt-1 pt-1">
              <span class="text-xs"> need refill? <br /> </span>
              <code>
                {{ `${needsRefill(med.id, med.amountPerDay)}`.toUpperCase() }}
              </code>
            </div>
            <!-- <div v-if="needsRefill(med.id, med.amountPerDay)">
                how many boxes: <br />
                {{ Math.ceil(medsToCheckup(med.amountPerDay) / med.perBox) }}
              </div> -->
          </div>
        </template>
      </div>

      <!-- card info -->
      <div class="card-content self-end text-center">
        <h2 class="card-title inline-flex text-7xl lowercase">
          {{ props.data.title }}
        </h2>
        <p v-if="props.data.info" class="card-info">
          {{ props.data.info }}
        </p>
      </div>

      <!-- <div class="card-actions absolute top-5 right-5">
        <button class="aspect-square p-1 rounded-full">
          <PlusIcon class="w-5 aspect-square" />
        </button>
      </div> -->
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
