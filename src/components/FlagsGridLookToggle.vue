<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

import IconList from '@/components/icons/IconList.vue'
import IconListGrouped from '@/components/icons/IconListGrouped.vue'
</script>

<template>
  <button
    class="btn btn-sm btn-square btn-ghost text-slate-600"
    @click="countriesStore.toggleGroupedFlags"
    :title="`show ${countriesStore.showGroupedFlags ? 'plain' : 'grouped by 1st letter'} flags grid`"
  >
    <IconList v-if="countriesStore.showGroupedFlags" class="w-6 h-6" />
    <IconListGrouped v-else class="w-6 h-6" />
  </button>
</template>
