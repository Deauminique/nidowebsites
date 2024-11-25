import { defineConfig } from "vite";

export default defineConfig({
  base: "/nidowebsites/",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
