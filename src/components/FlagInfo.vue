<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

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
      @click="() => countriesStore.toggleFlagsWithSymbol()"
    />
    <FlagIcon
      :icon="FlagIcons.Origami"
      :class="country.flagData.origami ? 'text-sky-700' : 'text-slate-200'"
      @click="() => countriesStore.toggleFlagsWithOrigami()"
    />
    <FlagIcon
      :icon="FlagIcons.GbRelated"
      :class="country.flagData.gb_related ? 'text-sky-700' : 'text-slate-200'"
      @click="() => countriesStore.toggleGbRelatedFlags()"
    />
    <ColorsList :colors="country.flagData.colors" class="ml-auto" />
  </div>
</template>
