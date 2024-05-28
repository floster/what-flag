<script setup lang="ts">
import FiltersPanel from '@/components/FiltersPanel.vue'
</script>

<template>
  <header class="flex flex-col md:flex-row md:items-center justify-between gap-y-6">
    <FiltersPanel />
    <h1 class="text-3xl md:text-2xl font-bold text-sky-600 order-first md:order-none">
      <span>Whatta</span> Flag?
    </h1>
  </header>
</template>
