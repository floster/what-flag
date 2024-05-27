<script setup lang="ts">
import { ref, watch } from 'vue'
import FlagsGrid from '@/components/FlagsGrid.vue'
import FilterColors from '@/components/FilterColors.vue'

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
    <FilterColors class="mb-8" />
    <FlagsGrid :countris="countries" />
  </div>
</template>
