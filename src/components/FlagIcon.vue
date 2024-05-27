<script setup lang="ts">
import { defineProps, computed } from 'vue'

import { FlagIcons } from '@/types'

import IconGbRelated from '@/components/icons/IconGbRelated.vue'
import IconOrigami from '@/components/icons/IconOrigami.vue'
import IconSymbol from '@/components/icons/IconSymbol.vue'

const props = defineProps<{
  icon: FlagIcons
}>()

const iconComponent = computed(() => {
  switch (props.icon) {
    case FlagIcons.GbRelated:
      return IconGbRelated
    case FlagIcons.Origami:
      return IconOrigami
    case FlagIcons.Symbol:
      return IconSymbol
    default:
      return null
  }
})
</script>

<template>
  <component v-if="iconComponent" :is="iconComponent" class="w-6 h-6" />
</template>
