<script setup lang="ts">
import { ref, watch } from 'vue'
import FlagsGrid from '@/components/FlagsGrid.vue'
import FiltersPanel from '@/components/FiltersPanel.vue'

// TODO: implement &/| logic for filters
// TODO: filter by origami/symbol/us_related
// TODO: improve responsive design
// TODO: country page with more info (API call)
// TODO: think about lazyloading on 1st screen

// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

const countries = ref(countriesStore.getFilteredCountries)

watch(
  () => countriesStore.getFilteredCountries,
  () => {
    countries.value = countriesStore.getFilteredCountries
  }
)
</script>

<template>
  <div class="container mx-auto py-6">
    <FiltersPanel class="mb-8 pt-4 pb-8 border-b border-b-neutral-content dark:border-b-neutral" />
    <FlagsGrid :countris="countries" />
  </div>
</template>
