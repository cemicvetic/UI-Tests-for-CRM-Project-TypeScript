import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://clientbase.us',
    setupNodeEvents(on, config) {

    },
  },
});
