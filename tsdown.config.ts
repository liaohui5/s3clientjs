import { defineConfig } from "tsdown";

// https://tsdown.dev/zh-CN/
export default defineConfig({
  entry: "./src/s3client.ts",
  dts: true,
  clean: true,
});
