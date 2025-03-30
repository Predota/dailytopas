<script setup lang="ts">
const route = useRoute();

const slug = route.params.page;

const { data: page } = await useFetch(`/api/pages/${slug}`, {
  key: `article-${slug}`,
});
</script>

<template>
  <main>
    {{ page?.fields.title }}
  </main>
</template>
