import withNuxt from "./.nuxt/eslint.config.mjs";

const config = await withNuxt().override("nuxt/vue/rules", {
  rules: {
    "vue/static-class-names-order": "error",
    "vue/multi-word-component-names": "off",
  },
});
// your custom flat configs go here, for example:
// {
//   files: ['**/*.ts', '**/*.tsx'],
//   rules: {
//     'no-console': 'off' // allow console.log in TypeScript files
//   }
// },
// {
//   ...
// }
export default config;
