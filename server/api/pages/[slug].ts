// @ts-expect-error module is not defined
import jsonStringifySafe from "json-stringify-safe";

import { contentfulClient } from "@/server/utils/contentful";
import type { TypePageSkeleton } from "@/types/contentful";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  const data = await contentfulClient.getEntries<TypePageSkeleton>({
    content_type: "page",
    "fields.slug": slug,
    include: 10,
  });

  return JSON.parse(jsonStringifySafe(data.items[0])) as (typeof data.items)[0];
});
