import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { IBlogPostFields } from "$/content/blog/types";
import { headingRenderer } from "./Heading";

const defaultOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: headingRenderer,
    [BLOCKS.HEADING_2]: headingRenderer,
    [BLOCKS.HEADING_3]: headingRenderer,
    [BLOCKS.HEADING_4]: headingRenderer,
    [BLOCKS.HEADING_5]: headingRenderer,
    [BLOCKS.HEADING_6]: headingRenderer,
  },
};

export default function renderPost(post: IBlogPostFields) {
  return documentToReactComponents(post.content.json, defaultOptions);
}

export const renderers = {
  heading: headingRenderer,
};
