<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { medicine } from '@/utils/database'
import { stash } from '@/utils/stash'
import type { Medicine } from '@/types/Medicine'

const route = useRoute()

const medicineDetail = ref<Medicine>()

const getMedicine = () => {
  return medicine.find((m) => m.id === route.params.id)
}

const lastsForDays = computed(() => {
  if (!medicineDetail.value) return 0

  return Math.floor(
    medicineDetail.value.perBox / medicineDetail.value.amountPerDay,
  )
})

const lastsUntil = computed(() => {
  if (!medicineDetail.value) return new Date()
  const today = new Date()
  return new Date(
    today.setDate(today.getDate() + lastsForDays.value),
  ).toDateString()
})

// @todo
// const needsRefill = computed(() => {
//   return daysUntilNextAppoitment.value < lastsForDays.value
// })

onMounted(() => {
  medicineDetail.value = getMedicine()
})
</script>

<template>
  <div v-if="medicineDetail?.id" class="medicine-details">
    -- breadcrumbs --

    <h2 class="text-6xl mb-10 pt-5">
      {{ medicineDetail.title }}
    </h2>

    <div class="grid border rounded-md border-secondary/20 p-5">
      <p>{{ medicineDetail.text }}</p>
      <p>{{ medicineDetail.perBox }}</p>
      <p>{{ medicineDetail.dose }}</p>
      <p>{{ medicineDetail.amountPerDay }}</p>
      <p>{{ medicineDetail.type }}</p>
    </div>

    <div>
      lasts for <strong>{{ lastsForDays }}</strong> days: <br />
    </div>
    <div>
      lasts untill - date: <br />
      {{ lastsUntil }}
    </div>
  </div>
</template>
