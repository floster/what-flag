<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()
</script>

<template>
  <button class="btn btn-ghost btn-sm" @click="countriesStore.toggleExtendedFlagInfo">
    {{ countriesStore.extendedFlagInfo ? 'Hide' : 'Show' }} extended info
  </button>
</template>
