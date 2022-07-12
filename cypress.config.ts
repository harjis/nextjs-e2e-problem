import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "test/e2e/**/*.e2e.ts",
    fixturesFolder: false,
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    video: false,
    supportFile: "cypress/support/index.ts",
    setupNodeEvents(on, config) {

      return config
    },
  },
})
