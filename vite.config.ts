import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@GlobalStyles": path.resolve(__dirname, "./src/GlobalStyles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@routers": path.resolve(__dirname, "./src/routers"),
    },
  },
});
