/** @type {import("eslint").Linter.Config} */

import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  prettier, // Disable ESLint rules that conflict with Prettier
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "vue/multi-word-component-names": "off",
      "tailwindcss/classnames-order": "off",
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
);
