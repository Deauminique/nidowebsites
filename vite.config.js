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
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.jpg')) {
            return 'images/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  publicDir: "static",
});
