import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "SuperWhw",
      description: "SuperWhw's personal website",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SuperWhw",
      description: "SuperWhw 的个人网站",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
