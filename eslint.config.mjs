import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
