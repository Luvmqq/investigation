import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://xwtcosmos.com",

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],

  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  },

  adapter: cloudflare()
});