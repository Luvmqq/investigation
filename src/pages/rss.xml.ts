import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "@/data/site";

export async function GET(context) {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);
  return rss({
    title: site.nameEn,
    description: site.defaultDescription,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`
    }))
  });
}
