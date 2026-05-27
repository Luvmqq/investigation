import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://china-investigation-support.example.com",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
