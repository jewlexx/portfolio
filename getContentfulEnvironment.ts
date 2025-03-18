import dotenv from "dotenv";
import assert from "assert/strict";
import contentfulManagement from "contentful-management";

dotenv.config({
  path: ".env.local",
});

assert(process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);
assert(process.env.CONTENTFUL_SPACE_ID);
assert(process.env.CONTENTFUL_ENVIRONMENT);

const {
  CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
} = process.env;

function getContentfulEnvironment() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID!)
    .then((space) => space.getEnvironment(CONTENTFUL_ENVIRONMENT!));
}

module.exports = getContentfulEnvironment;
