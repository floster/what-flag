<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
  <div class="card card-compact w-full lg:max-w-80 xl:max-w-96 bg-base-100 shadow-xl rounded-lg">
    <figure>
      <img
        :src="`/flags/${country.code.toLowerCase()}.svg`"
        :alt="`Flag of ${country.name}`"
        loading="lazy"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-base">
        <div v-if="countriesStore.extendedFlagInfo" class="badge badge-lg badge-ghost">
          {{ country.code }}
        </div>
        <RouterLink :to="{ name: 'print', params: { code: country.code } }" class="">
          {{ country.name }}</RouterLink
        >
      </h2>
      <FlagInfo v-if="countriesStore.extendedFlagInfo" :country="country" class="mt-auto" />
    </div>
  </div>
</template>
