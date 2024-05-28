<script setup lang="ts">
import ColorSwatch from '@/components/ColorSwatch.vue'
import type { FlagColors, Colors } from '@/types'

const props = defineProps<{
  colors: FlagColors
}>()

const colors = Object.keys(props.colors) as Colors[]
</script>

<template>
  <div class="inline-flex w-min shadow">
    <ColorSwatch v-for="color in colors" :key="color" :color="color" />
  </div>
</template>
