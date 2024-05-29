<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

import IconSymbol from '@/components/icons/IconSymbol.vue'
</script>

<template>
  <button
    class="btn btn-sm btn-square btn-ghost hover:bg-slate-50"
    :class="countriesStore.flagsWithSymbol ? 'text-primary' : 'text-slate-400'"
    @click="countriesStore.toggleFlagsWithSymbol"
    :title="`${countriesStore.flagsWithSymbol ? 'show all flags' : 'show only flags with symbols'} `"
  >
    <IconSymbol class="w-6 h-6" />
  </button>
</template>
