<script setup lang="ts">
import FlagsGrid from '@/components/FlagsGrid.vue'

// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

const countries = countriesStore.getCountriesCodes
</script>

<template>
  <div class="container mx-auto py-6">
    <FlagsGrid :countris="countries" />
  </div>
</template>
