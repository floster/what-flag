<script setup lang="ts">
import FiltersPanel from '@/components/FiltersPanel.vue'
</script>

<template>
  <header
    class="flex flex-col md:flex-row md:items-center justify-between gap-y-6 border-b border-b-neutral-content dark:border-b-neutral"
  >
    <FiltersPanel />
    <h1
      class="app-logo text-3xl md:text-2xl font-bold text-transparent order-first md:order-none bg-clip-text bg-gradient-to-r from-sky-600 to-fuchsia-500"
    >
      Whatta Flag?
    </h1>
  </header>
</template>
