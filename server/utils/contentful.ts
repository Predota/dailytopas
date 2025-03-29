import * as contentful from "contentful";

// Get environment variables
const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
  NODE_ENV,
  BRANCH,
} = process.env;

// Validate environment variables
if (
  !CONTENTFUL_SPACE_ID ||
  !CONTENTFUL_DELIVERY_API_TOKEN ||
  !CONTENTFUL_PREVIEW_API_TOKEN
) {
  throw new Error("Missing Contentful environment variables");
}

// Configuration object for Contentful client
const config = {
  space: CONTENTFUL_SPACE_ID,
  accessToken:
    NODE_ENV === "development" || BRANCH === "preview"
      ? CONTENTFUL_PREVIEW_API_TOKEN
      : CONTENTFUL_DELIVERY_API_TOKEN,
  host:
    NODE_ENV === "development" || BRANCH === "preview"
      ? "preview.contentful.com"
      : undefined,
};

// Create and export the Contentful client
export const contentfulClient =
  contentful.createClient(config).withoutUnresolvableLinks;
