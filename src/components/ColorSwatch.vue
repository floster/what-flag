<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { Colors } from '@/types'

const props = defineProps<{
  color: Colors
}>()

const color = computed(() => {
  switch (props.color) {
    case Colors.black:
      return 'bg-black'
    case Colors.white:
      return 'bg-white'
    case Colors.red:
      return 'bg-rose-500'
    case Colors.green:
      return 'bg-emerald-500'
    case Colors.blue:
      return 'bg-sky-500'
    case Colors.yellow:
      return 'bg-amber-500'
    default:
      return 'bg-slate-300'
  }
})
</script>
<template>
  <li class="inline-flex w-8 h-4 bg-slate-300" :class="color"></li>
</template>
