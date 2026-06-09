import { defineConfig } from "tsdown";

// https://tsdown.dev/zh-CN/
export default defineConfig({
  entry: "./src/example.ts",
  dts: false,
  clean: true,
});
