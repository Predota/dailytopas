import { defineNuxtModule, createResolver } from "nuxt/kit";

import { contentfulClient } from "@/server/utils/contentful";
import type {
  TypeTopicSkeleton,
  TypeArchiveSkeleton,
  TypeCategorySkeleton,
} from "@/types/contentful";

export default defineNuxtModule({
  meta: {
    name: "archive-routes",
  },
  async setup(_options, nuxt) {
    nuxt.hook("pages:extend", async (pages) => {
      const { resolve } = createResolver(import.meta.url);

      const topics = await contentfulClient.getEntries<TypeTopicSkeleton>({
        content_type: "topic",
        select: ["fields.id", "fields.slug"],
      });

      for (const topic of topics.items) {
        const archives = await contentfulClient.getEntries<TypeArchiveSkeleton>(
          {
            content_type: "archive",
            "fields.topic.sys.contentType.sys.id": "topic",
            "fields.topic.fields.id": topic.fields.id,
            select: ["fields.limit"],
          },
        );

        const archive = archives.items[0];

        if (archive) {
          // General
          const data = await contentfulClient.getEntries({
            content_type: topic.fields.id,
            select: ["fields.slug", "fields.category"],
            limit: 1000,
          });

          const generalPageNb = Math.ceil(data.total / archive.fields.limit);

          for (let page = 1; page <= generalPageNb; page++) {
            pages.push({
              name: `${topic.fields.id}-${page}`,
              path: `/${topic.fields.slug}/${page}`,
              file: resolve("runtime/archive.vue"),
              meta: {
                topic: topic.fields.id,
                page: page,
                limit: archive.fields.limit,
              },
            });
          }

          console.log(
            `✅ Added ${generalPageNb} ${topic.fields.id} archive pages`,
          );

          // Categories
          const categories =
            await contentfulClient.getEntries<TypeCategorySkeleton>({
              content_type: "category",
              "fields.topic.sys.contentType.sys.id": "topic",
              "fields.topic.fields.id": topic.fields.id,
              select: ["fields.slug", "sys.id"],
            });

          for (const category of categories.items) {
            const categoryItems = data.items.filter((item) => {
              const itemCategories = item.fields.category;
              return (
                Array.isArray(itemCategories) &&
                itemCategories.some(
                  (c) => (c as typeof category)?.sys?.id === category.sys.id,
                )
              );
            });

            const categoryPageNb = Math.ceil(
              categoryItems.length / archive.fields.limit,
            );

            for (let page = 1; page <= categoryPageNb; page++) {
              pages.push({
                name: `${category.fields.slug}-${page}`,
                path: `/${topic.fields.slug}/${category.fields.slug}/${page}`,
                file: resolve("runtime/archive.vue"),
                meta: {
                  topic: topic.fields.id,
                  page: page,
                  limit: archive.fields.limit,
                },
              });
            }

            console.log(
              `✅ Added ${categoryPageNb} ${category.fields.slug} archive pages`,
            );
          }
        }
      }
    });
  },
});
