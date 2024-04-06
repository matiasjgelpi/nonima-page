import eslintPluginAstro from "eslint-plugin-astro";
import stylelint from "stylelint";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    processor: stylelint,
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      "astro/valid-define-props": "error",
      "astro/prop-types": "error",
      "astro/no-unknown-astro-component": "error",
      "astro/no-invalid-astro-component": "error",
      "astro/no-invalid-astro-attribute": "error",
      "astro/no-invalid-astro-slot": "error",
      "astro/no-invalid-astro-tag": "error",
      "astro/no-invalid-astro-import": "error",
      "astro/no-invalid-astro-export": "error",
      "astro/no-invalid-astro-script": "error",
      "astro/no-invalid-astro-style": "error",
      "astro/no-invalid-astro-markup": "error"
    },
  },
];
