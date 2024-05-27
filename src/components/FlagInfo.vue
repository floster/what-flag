<script setup lang="ts">
import { defineProps } from 'vue'

import type { Country } from '@/types'
import { FlagIcons } from '@/types'

import FlagIcon from '@/components/FlagIcon.vue'
import ColorsList from '@/components/ColorsList.vue'

defineProps<{
  country: Country
}>()
</script>

<template>
  <div class="flex items-center gap-x-3">
    <FlagIcon
      :icon="FlagIcons.Symbol"
      :class="country.flagData.symbol ? 'text-sky-700' : 'text-slate-200'"
    />
    <FlagIcon
      :icon="FlagIcons.Origami"
      :class="country.flagData.origami ? 'text-sky-700' : 'text-slate-200'"
    />
    <FlagIcon
      :icon="FlagIcons.GbRelated"
      :class="country.flagData.gb_related ? 'text-sky-700' : 'text-slate-200'"
    />
    <ColorsList :colors="country.flagData.colors" class="ml-auto" />
  </div>
</template>
