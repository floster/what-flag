<script setup lang="ts">
import { ref, watch } from 'vue'
import TheFlag from '@/components/TheFlag.vue'

// import coutries store
import { useCountriesStore } from '@/stores/coutries'
const countriesStore = useCountriesStore()

// const groupedCountries = ref(countriesStore.getGroupedByFirstLetterFlags)

// watch(
//   () => countriesStore.getGroupedByFirstLetterFlags,
//   () => {
//     countries.value = countriesStore.getGroupedByFirstLetterFlags
//   }
// )
</script>

<template>
  <div class="flex flex-col gap-y-10">
    <section
      v-for="(countries, code) in countriesStore.getGroupedByFirstLetterFlags"
      :key="code"
      class="flex flex-col gap-y-3"
    >
      <header>
        <h2 class="font-bold text-lg text-slate-700">{{ code }}</h2>
      </header>

      <TransitionGroup
        name="list"
        tag="div"
        class="grid grid-cols-1 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <TheFlag v-for="code in countries" :key="code" :code="code"
      /></TransitionGroup>
    </section>
  </div>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.35s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
