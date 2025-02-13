// eslint.config.js
import js from "@eslint/js";
import node from "eslint-plugin-node";
import eslintPluginImport from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
  {
    plugins: { node, import: eslintPluginImport },
    rules: {
      "no-console": "warn",
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "no-unused-vars": "warn",
      "import/no-unresolved": "error"
    },
    ignores: [
      "node_modules",
      "dist",
      "coverage",
      "*.min.js",
      "./src/tests/**",
      "package.json",
      "package-lock.json",
      "eslint.config.js", 
    ],
  },
];
