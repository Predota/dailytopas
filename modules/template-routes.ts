import { defineNuxtModule, createResolver } from "nuxt/kit";

import { contentfulClient } from "@/server/utils/contentful";
import type {
  TypeTopicSkeleton,
  TypeTemplateSkeleton,
} from "@/types/contentful";

export default defineNuxtModule({
  meta: {
    name: "template-routes",
  },
  async setup(_options, nuxt) {
    nuxt.hook("pages:extend", async (pages) => {
      const { resolve } = createResolver(import.meta.url);

      const topics = await contentfulClient.getEntries<TypeTopicSkeleton>({
        content_type: "topic",
        select: ["fields.id", "fields.slug"],
      });

      for (const topic of topics.items) {
        const templates =
          await contentfulClient.getEntries<TypeTemplateSkeleton>({
            content_type: "template",
            "fields.topic.sys.contentType.sys.id": "topic",
            "fields.topic.fields.id": topic.fields.id,
            select: [],
          });

        if (templates.total) {
          const data = await contentfulClient.getEntries({
            content_type: topic.fields.id,
            select: ["fields.slug"],
            limit: 1000,
          });

          for (const item of data.items) {
            pages.push({
              name: `${topic.fields.id}-${item.fields.slug}`,
              path: `/${topic.fields.slug}/${item.fields.slug}`,
              file: resolve("runtime/template.vue"),
              meta: { topic: topic.fields.id, slug: item.fields.slug },
            });
          }

          console.log(`✅ Added ${data.items.length} ${topic.fields.id} pages`);
        }
      }
    });
  },
});
