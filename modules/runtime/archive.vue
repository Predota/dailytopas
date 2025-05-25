<script setup lang="ts">
const route = useRoute();

const topic = route.meta.topic;
const page = route.meta.page;
</script>

<template>
  <main>
    <p>Topic: {{ topic }}</p>
    <p>Page: {{ page }}</p>
  </main>
</template>
