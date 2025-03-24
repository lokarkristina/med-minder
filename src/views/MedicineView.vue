<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { medicine } from '@/utils/database'
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

onMounted(() => {
  medicineDetail.value = getMedicine()
})
</script>

<template>
  <div v-if="medicineDetail?.id" class="medicine-details">
    -- breadcrumbs --

    <h2 class="pt-5 mb-10 text-6xl">
      {{ medicineDetail.title }}
    </h2>

    <div class="grid p-5 border rounded-md border-secondary/20">
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
