<script setup lang="ts">
import { computed } from 'vue'
import { Colors, Backgrounds } from '@/types'

const props = defineProps<{
  color: Colors
}>()

const color = computed(() => {
  switch (props.color) {
    case Colors.black:
      return Backgrounds.black
    case Colors.white:
      return Backgrounds.white
    case Colors.red:
      return Backgrounds.red
    case Colors.green:
      return Backgrounds.green
    case Colors.blue:
      return Backgrounds.blue
    case Colors.yellow:
      return Backgrounds.yellow
    default:
      return
  }
})
</script>
<template>
  <li class="inline-flex w-8 h-4" :class="color"></li>
</template>
