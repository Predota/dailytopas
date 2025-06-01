// @ts-expect-error module is not defined
import jsonStringifySafe from "json-stringify-safe";

import { contentfulClient } from "@/server/utils/contentful";

export default defineEventHandler(async (event) => {
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
      include: 10,
      ...(typeof query.limit === "string"
        ? { limit: parseInt(query.limit, 10) }
        : {}),
      ...(typeof query.skip === "string"
        ? { skip: parseInt(query.skip, 10) }
        : {}),
    });

    return JSON.parse(jsonStringifySafe(data.items)) as typeof data.items;
  } catch {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: `Could not fetch entries for content type "${query.topic}"`,
      }),
    );
  }
});
