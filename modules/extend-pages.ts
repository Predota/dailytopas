import { defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  hooks: {
    async "pages:extend"(pages) {
      // Modify pages
      console.log("Custom module extending pages:", pages);
    },
  },
});
