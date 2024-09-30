import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

export default {
  content: ["./pages/**/*.vue", "./components/**/*.vue", "./app.vue"],
  plugins: [
    catppuccin({
      prefix: "ctp",
      defaultFlavour: "macchiato",
    }),
  ],

} satisfies Config;
