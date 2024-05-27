<script setup lang="ts">
import { defineProps } from 'vue'

import type { Country } from '@/types'

// import components
import FlagInfo from '@/components/FlagInfo.vue'

// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

const props = defineProps<{
  code: string
}>()

if (!countriesStore.getCountriesCodes.includes(props.code)) {
  throw new Error(`Country code ${props.code} is not valid`)
}

const country: Country = countriesStore.getCountryByCode(props.code)!
</script>

<template>
  <div class="card card-compact w-full max-w-96 bg-base-100 shadow-xl rounded-lg">
    <figure>
      <img :src="`/flags/${country.code.toLowerCase()}.svg`" :alt="`Flag of ${country.name}`" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <div class="badge badge-lg badge-ghost">{{ country.code }}</div>
        {{ country.name }}
      </h2>
      <FlagInfo v-if="countriesStore.extendedFlagInfo" :country="country" class="mt-auto" />
    </div>
  </div>
</template>
