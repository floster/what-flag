<script setup lang="ts">
import { defineProps } from 'vue'
import TheFlag from '@/components/TheFlag.vue'

defineProps<{
  countris: string[]
}>()
</script>

<template>
  <div
    class="grid grid-cols-1 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <TheFlag v-for="code in countris" :key="code" :code="code" />
  </div>
</template>
