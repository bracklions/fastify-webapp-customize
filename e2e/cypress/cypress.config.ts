import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      config.env.BASE_URL = process.env.BASE_URL;
      return config;
    },
  },
});
