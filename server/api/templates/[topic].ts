// @ts-expect-error module is not defined
import jsonStringifySafe from "json-stringify-safe";

import { contentfulClient } from "@/server/utils/contentful";
import type { TypeTemplateSkeleton } from "@/types/contentful";

export default defineEventHandler(async (event) => {
  const topic = getRouterParam(event, "topic");

  const data = await contentfulClient.getEntries<TypeTemplateSkeleton>({
    content_type: "template",
    "fields.topic.sys.contentType.sys.id": "topic",
    "fields.topic.fields.id": topic,
    include: 10,
  });

  return JSON.parse(jsonStringifySafe(data.items[0])) as (typeof data.items)[0];
});
