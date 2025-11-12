import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off", // Turn off base rule
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
