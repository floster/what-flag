<script setup lang="ts">
import FiltersPanel from '@/components/FiltersPanel.vue'
import IconGithub from './icons/IconGithub.vue'
</script>

<template>
  <header
    class="flex flex-col md:flex-row md:items-center justify-between gap-y-10 border-b border-b-neutral-content dark:border-b-neutral"
  >
    <FiltersPanel />
    <div class="flex items-center gap-x-3 order-first md:order-none">
      <!-- link to project's GitHub  -->
      <a
        href="https://github.com/floster/whatta-flag"
        target="_blank"
        rel="noopener noreferrer"
        class="flex order-last md:order-none ml-auto md:ml-0 w-8 h-8 text-neutral-content hover:text-neutral"
        ><IconGithub
      /></a>
      <h1
        class="app-logo text-3xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-fuchsia-500"
      >
        Whatta Flag?
      </h1>
    </div>
  </header>
</template>
