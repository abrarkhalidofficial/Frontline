import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { defineConfig } from "vite";
import hotExport from "vite-plugin-hot-export";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "global",
        replacement: path.resolve(__dirname, "./src/global"),
      },
      {
        find: "router",
        replacement: path.resolve(__dirname, "./src/router"),
      },
    ],
  },
  plugins: [
    react(),
    hotExport(),
    chunkSplitPlugin(),
    ViteWebfontDownload(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100,
    }),
  ],
});
