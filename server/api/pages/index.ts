// @ts-expect-error module is not defined
import jsonStringifySafe from "json-stringify-safe";

import { contentfulClient } from "@/server/utils/contentful";
import type { TypePageSkeleton } from "@/types/contentful";

export default defineEventHandler(async () => {
  const data = await contentfulClient.getEntries<TypePageSkeleton>({
    content_type: "page",
    include: 10,
  });

  return JSON.parse(jsonStringifySafe(data.items)) as typeof data.items;
});
