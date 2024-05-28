<script setup lang="ts">
import { ref, watch } from 'vue'
import FlagsGrid from '@/components/FlagsGrid.vue'
import FiltersPanel from '@/components/FiltersPanel.vue'
import StatsPanel from '@/components/StatsPanel.vue'

// [-] implement &/| logic for filters - bad idea
// [x] filter by origami/symbol/us_related
// [x] improve responsive design
// [ ] host app on netlify
// [ ] country page with more info (API call)
// [ ] think about lazyloading on 1st screen

// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

const countries = ref(countriesStore.getFilteredFlags)

watch(
  () => countriesStore.getFilteredFlags,
  () => {
    countries.value = countriesStore.getFilteredFlags
  }
)
</script>

<template>
  <div class="container mx-auto py-5 px-2">
    <FiltersPanel class="mb-5 pb-5 border-b border-b-neutral-content dark:border-b-neutral" />
    <StatsPanel />
    <FlagsGrid :countries="countries" />
  </div>
</template>
