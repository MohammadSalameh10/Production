import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "dist/**",
      ".parcel-cache/**",
      "node_modules/**",
      "test/**",
      "cypress/**",
    ],
  },

  pluginJs.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
