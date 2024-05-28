<script setup lang="ts">
import FilterByColors from '@/components/FilterByColors.vue'
import FilterBySymbol from '@/components/FilterBySymbol.vue'
</script>

<template>
  <section class="flex items-center gap-x-8">
    <FilterByColors />
    <FilterBySymbol />
  </section>
</template>
