import { defineConfig } from "eslint/config";
import raycast from "@raycast/eslint-config";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig([
  ...raycast,
  {
    rules: {
      "@raycast/prefer-title-case": "off",
    },
  },
]);
