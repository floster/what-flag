<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

import IconSymbol from '@/components/icons/IconSymbol.vue'
</script>

<template>
  <button
    class="btn btn-sm btn-square btn-ghost text-slate-400 hover:bg-slate-100"
    :class="{ 'text-primary bg-primary-content': countriesStore.flagsWithSymbolOnly }"
    @click="countriesStore.toggleFlagsWithSymbolOnly"
    :title="`${countriesStore.flagsWithSymbolOnly ? 'show all flags' : 'show only flags with symbols'} `"
  >
    <IconSymbol class="w-6 h-6" />
  </button>
</template>
