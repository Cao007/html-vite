import { defineConfig } from "vite";
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: "./src/main.ts",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/front": {
        target: "https://api.superblog.top",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
  plugins: [],
})