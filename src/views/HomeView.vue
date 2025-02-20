<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import Card from '@/components/elements/Card.vue'
import CardOverview from '@/components/elements/CardOverview.vue'

import { widgets } from '@/utils/widgets'
import { medicine } from '@/utils/database'
import { ArrowRightIcon, StarIcon } from '@heroicons/vue/16/solid'

const homeWidgets = ref(widgets)
const nextAppoitmentDate = ref<Date>(new Date())

const getCardType = (id: string) => {
  return widgets.find((w) => w.id === id)?.id
}

const daysUntilNextAppoitment = computed(() => {
  const today = new Date()
  const diffTime = nextAppoitmentDate.value.getTime() - today.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
})

const updateAppoitmentDate = () => {
  alert('🦆')
}

onMounted(() => {
  nextAppoitmentDate.value = new Date('04/04/2025')
})
</script>

<template>
  <div class="grid grid-cols-4 grid-rows-2 grid-flow-dense items-stretch gap-4">
    <template v-for="item in homeWidgets" :key="item.id">
      <!-- overview -->
      <template v-if="getCardType(item.id) === 'overview'">
        <CardOverview :data="item" />
      </template>

      <!-- next appointment -->
      <template v-else-if="getCardType(item.id) === 'next-appoitment'">
        <Card
          :title="item.title"
          :info="item.info"
          :type="item.id"
          :content-classes="['gap-y-2 justify-center content-center items-end']"
        >
          <div
            class="inline-grid w-auto justify-items-center justify-center gap-1 py-1 border-2 border-dashed rounded-sm"
          >
            <!-- @todo -->
            <code class="font-mono text-xl text-info">
              {{ nextAppoitmentDate.toLocaleDateString() }}
            </code>
            <button
              class="rounded-md text-[0.5rem] py-0.5 px-1 tracking-widest"
              @click="updateAppoitmentDate"
            >
              change
            </button>
          </div>

          <div class="grid">
            <span> next in</span>
            <code class="text-3xl font-bold">
              {{ daysUntilNextAppoitment.toLocaleString() }}<br />
            </code>
            <span class="text-sm">days</span>
          </div>
        </Card>
      </template>

      <!-- medicine list -->
      <template v-else-if="getCardType(item.id) === 'medicines'">
        <Card
          :title="item.title"
          :info="item.info"
          :type="item.id"
          :content-classes="['grid-rows-[auto_1fr] gap-y-1 items-start']"
        >
          <ul class="grid gap-0.75 h-full text-start text-[0.75rem]">
            <li v-for="med in medicine" :key="med.id" class="inline-block">
              <a
                href="/"
                class="flex items-center py-1"
                target="_blank"
                rel="noopener"
                :title="`learn more about ${med.title}`"
              >
                <span class="inline-block me-1">
                  <StarIcon class="w-3" />
                </span>
                <code>
                  {{ med.title }}
                </code>
                <ArrowRightIcon class="w-3 ms-auto" />
              </a>
            </li>
          </ul>
        </Card>
      </template>

      <!-- activity -->
       <template v-if="getCardType(item.id) === 'activity'">
        <Card :title="item.title" :type="item.id">

        </Card>
       </template>

      <!-- etc -->
       <template v-else-if="getCardType(item.id) === 'something'">
        <Card :title="item.title" :type="item.id">

        </Card>
       </template>
    </template>
  </div>
</template>
