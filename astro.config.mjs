import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://erwachsenenfragen.de",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
