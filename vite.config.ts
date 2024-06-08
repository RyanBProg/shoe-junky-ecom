import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Customize CSS Modules options here
      localsConvention: "camelCase",
      scopeBehaviour: "local",
      // Additional options can be added here as needed
    },
  },
});
