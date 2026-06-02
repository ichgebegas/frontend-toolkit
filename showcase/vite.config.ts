/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const githubActions = (
  globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }
).process?.env?.GITHUB_ACTIONS;

export default defineConfig({
  base: githubActions ? "/frontend-toolkit/" : "/",
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
