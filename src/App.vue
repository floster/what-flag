<script setup lang="ts">
import { ref, watch } from 'vue'
import FlagsGrid from '@/components/FlagsGrid.vue'
import AppHeader from '@/components/AppHeader.vue'
import StatsPanel from '@/components/StatsPanel.vue'

// [-] implement &/| logic for filters - bad idea
// [x] filter by origami/symbol/us_related
// [x] improve responsive design
// [x] host app on netlify
// [ ] group flags by country's 1st letter
// [ ] print page with dimmed flag colors
// [ ] country page with more info (API call)
// [ ] think about lazyloading on 1st screen
</script>

<template>
  <div class="container mx-auto py-5 px-2">
    <AppHeader class="mb-5 pb-5" />
    <StatsPanel />
    <FlagsGrid />
  </div>
</template>
