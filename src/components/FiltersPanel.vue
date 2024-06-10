<script setup lang="ts">
import FilterByColors from '@/components/FilterByColors.vue'
import FilterBySymbol from '@/components/FilterBySymbol.vue'
import FilterByOrigami from '@/components/FilterByOrigami.vue'
import FilterGbRelated from '@/components/FilterGbRelated.vue'
import FiltersReset from '@/components/FiltersReset.vue'

// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()
</script>

<template>
  <section class="flex flex-col md:flex-row md:items-center gap-x-8 gap-y-4">
    <FilterByColors />
    <div class="flex items-center gap-x-2">
      <FilterBySymbol :disabled="!countriesStore.getAttributesToBeFiltered.includes('symbol')" />
      <FilterByOrigami :disabled="!countriesStore.getAttributesToBeFiltered.includes('origami')" />
      <FilterGbRelated
        :disabled="!countriesStore.getAttributesToBeFiltered.includes('gb_related')"
      />
      <FiltersReset class="ml-4" />
    </div>
  </section>
</template>
