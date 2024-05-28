<script setup lang="ts">
import { defineProps } from 'vue'
import TheFlag from '@/components/TheFlag.vue'

defineProps<{
  countries: string[]
}>()
</script>

<template>
  <section>
    <TransitionGroup
      name="list"
      tag="div"
      class="grid grid-cols-1 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <TheFlag v-for="code in countries" :key="code" :code="code"
    /></TransitionGroup>
  </section>
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
