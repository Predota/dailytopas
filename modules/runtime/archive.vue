<script setup lang="ts">
const route = useRoute();
const { topic, page, limit } = route.meta as {
  topic: string;
  page: number;
  limit: number;
};

// const { data: archiveTemplate } = await useFetch(`/api/archives/${topic}`);

const { data: archiveItems } = await useFetch(`/api/articles`, {
  query: { topic, limit, skip: (page - 1) * limit },
});
</script>

<template>
  <main>
    <p>Topic: {{ topic }}</p>
    <p>Page: {{ page }}</p>

    <pre>{{ archiveItems?.map((e) => e.fields.slug) }}</pre>
  </main>
</template>
