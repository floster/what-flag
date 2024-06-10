<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import FlagsGrid from '@/components/FlagsGrid.vue'
import FlagsGridHeader from '@/components/FlagsGridHeader.vue'
</script>

<template>
  <div class="container mx-auto py-5 px-2">
    <AppHeader class="mb-5 pb-5" />
    <FlagsGridHeader />
    <FlagsGrid />
  </div>
</template>
