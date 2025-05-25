// @ts-expect-error module is not defined
import jsonStringifySafe from "json-stringify-safe";

import { contentfulClient } from "@/server/utils/contentful";
import type { TypeBlogPostSkeleton } from "@/types/contentful";

export default defineEventHandler(async () => {
  const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    include: 10,
  });

  return JSON.parse(jsonStringifySafe(data.items)) as typeof data.items;
});
