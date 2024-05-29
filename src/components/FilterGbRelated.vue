<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

import IconGbRelated from '@/components/icons/IconGbRelated.vue'
</script>

<template>
  <button
    class="btn btn-sm btn-square btn-ghost hover:bg-slate-50"
    :class="countriesStore.gbRelatedFlags ? 'text-primary' : 'text-slate-400'"
    @click="countriesStore.toggleGbRelatedFlags"
    :title="`${countriesStore.gbRelatedFlags ? 'show all flags' : 'show only Great Britain related flags'} `"
  >
    <IconGbRelated class="w-6 h-6" />
  </button>
</template>
