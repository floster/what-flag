<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

import IconOrigami from '@/components/icons/IconOrigami.vue'
</script>

<template>
  <button
    class="btn btn-sm btn-square btn-ghost hover:bg-slate-50"
    :class="countriesStore.flagsWithOrigami ? 'text-primary' : 'text-slate-400'"
    @click="countriesStore.toggleFlagsWithOrigami"
    :title="`${countriesStore.flagsWithOrigami ? 'show all flags' : 'show only flags with origami'} `"
  >
    <IconOrigami class="w-6 h-6" />
  </button>
</template>
