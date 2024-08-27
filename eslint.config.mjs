import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ["build/", "archive/", ".docusaurus/"]
  },
  pluginJs.configs.recommended
];
