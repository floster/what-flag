<script setup lang="ts">
import FilterByColors from '@/components/FilterByColors.vue'
import FilterBySymbol from '@/components/FilterBySymbol.vue'
import FilterByOrigami from '@/components/FilterByOrigami.vue'
import FilterGbRelated from '@/components/FilterGbRelated.vue'
import FiltersReset from '@/components/FiltersReset.vue'
</script>

<template>
  <section class="flex flex-col md:flex-row md:items-center gap-x-8 gap-y-4">
    <FilterByColors />
    <div class="flex items-center gap-x-2">
      <FilterBySymbol />
      <FilterByOrigami />
      <FilterGbRelated />
      <FiltersReset class="ml-4" />
    </div>
  </section>
</template>
