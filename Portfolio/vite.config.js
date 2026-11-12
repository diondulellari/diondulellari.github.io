import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Served from the root of the user site https://diondulellari.github.io/
// (repo named "diondulellari.github.io"), so no sub-path base is needed.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
