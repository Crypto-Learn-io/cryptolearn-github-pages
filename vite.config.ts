import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/cryptolearn-github-pages/",
  plugins: [react()],
});
