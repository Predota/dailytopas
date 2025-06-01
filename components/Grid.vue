<script setup lang="ts">
defineProps<{
  columns: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}>();
</script>

<template>
  <div class="grid">
    <slot />
  </div>
</template>
