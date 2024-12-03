import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    watch: false,
    reporters: ["vitest-nyancat-reporter"],
  },
});
