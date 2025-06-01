// @ts-expect-error module is not defined
import jsonStringifySafe from "json-stringify-safe";

import { contentfulClient } from "@/server/utils/contentful";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  const query = getQuery(event);

  if (typeof query.topic !== "string") {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Missing `topic` query parameter",
      }),
    );
  }

  try {
    const data = await contentfulClient.getEntries({
      content_type: query.topic,
      "fields.slug": slug,
    });

    return JSON.parse(
      jsonStringifySafe(data.items[0]),
    ) as (typeof data.items)[0];
  } catch {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: `Could not fetch entry "${slug}" for content type "${query.topic}"`,
      }),
    );
  }
});
