<script setup lang="ts">
// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

import FlagExtendedInfoToggle from '@/components/FlagExtendedInfoToggle.vue'
import FlagsGridLookToggle from '@/components/FlagsGridLookToggle.vue'
</script>

<template>
  <section class="flex items-center gap-x-8 mb-3 lg:mb-4">
    <p class="text-slate-600">
      <span class="font-semibold">{{ countriesStore.getResultsQty }}</span> flags
    </p>
    <div class="flex items-center gap-x-5 ml-auto">
      <FlagsGridLookToggle />
      <FlagExtendedInfoToggle />
    </div>
  </section>
</template>
