<script setup lang="ts">
const route = useRoute();

const topic = route.meta.topic;
const slug = route.meta.slug;
</script>

<template>
  <main>
    <p>Topic: {{ topic }}</p>
    <p>Slug: {{ slug }}</p>
  </main>
</template>
