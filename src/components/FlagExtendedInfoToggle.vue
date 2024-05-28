<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

import IconLessInfo from '@/components/icons/IconLessInfo.vue'
import IconMoreInfo from '@/components/icons/IconMoreInfo.vue'
</script>

<template>
  <button
    class="btn btn-sm btn-square btn-ghost text-slate-600"
    @click="countriesStore.toggleExtendedFlagInfo"
    :title="`${countriesStore.extendedFlagInfo ? 'hide' : 'show'} additional flag info`"
  >
    <IconLessInfo v-if="countriesStore.extendedFlagInfo" class="w-6 h-6" />
    <IconMoreInfo v-else class="w-6 h-6" />
  </button>
</template>
