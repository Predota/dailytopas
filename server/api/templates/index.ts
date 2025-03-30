// @ts-expect-error module is not defined
import jsonStringifySafe from "json-stringify-safe";

import { contentfulClient } from "@/server/utils/contentful";
import type { TypeTemplateSkeleton } from "@/types/contentful";

export default defineEventHandler(async () => {
  const data = await contentfulClient.getEntries<TypeTemplateSkeleton>({
    content_type: "template",
    include: 10,
  });

  return JSON.parse(jsonStringifySafe(data.items)) as typeof data.items;
});
