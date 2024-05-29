<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()
</script>

<template>
  <button
    class="btn btn-xs btn-link text-slate-400 font-light decoration-dotted"
    @click="() => countriesStore.resetFilters()"
  >
    reset filters
  </button>
</template>
