<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink :to="{ name: 'home' }" class="flex w-screen">
    <figure class="flex opacity-5 h-screen w-auto m-auto print:max-h-screen print:max-w-full">
      <img :src="`/flags/${$route.params.code}.svg`" :alt="`Flag of ${$route.params.code}`" />
    </figure>
  </RouterLink>
</template>
