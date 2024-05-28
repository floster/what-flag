<script setup lang="ts">
import FilterByColors from '@/components/FilterByColors.vue'
import FilterBySymbol from '@/components/FilterBySymbol.vue'
import FlagExtendedInfoToggle from '@/components/FlagExtendedInfoToggle.vue'
</script>

<template>
  <section class="flex items-center gap-x-8">
    <FilterByColors />
    <FilterBySymbol />
    <FlagExtendedInfoToggle class="ml-auto" />
  </section>
</template>
