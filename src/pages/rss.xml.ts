import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import appendWinpax from "$/projects/winpax/projects_compat";
import { appendRepertoire } from "$/projects/repertoire/compat";

export async function GET(context) {
  const nextUrl = context.site;
  const imageUrl = encodeURIComponent(`${nextUrl}/icons/repertoire.png`);

  const projectsCollection = await getCollection("projects");

  const projects = appendRepertoire(
    imageUrl,
    appendWinpax(
      projectsCollection.map((post) => ({
        ...post.data,
        slug: post.id,
        content: post.body!,
      })),
    ),
  );

  console.log(projects);
  return rss({
    title: "Juliette Cordor's Portfolio",
    description: "Juliette Cordor's corner of the internet",
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: projects.map((project) => ({
      title: project.title,
      description: project.description,
      link: context.site + "projects/" + project.slug,
      pubDate: project.pubDate ? new Date(project.pubDate) : undefined,
      author: "Juliette Cordor",
      content: project.content,
    })),
    customData: `<language>en-au</language>`,
  });
}
