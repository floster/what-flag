<script setup lang="ts">
import { ref } from 'vue'

const hello = ref('Hello, Vue 3 + Vite + Tailwindcss + DaisyUI!')
</script>

<template>
  <h1 class="heading-1">{{ hello }}</h1>
</template>
